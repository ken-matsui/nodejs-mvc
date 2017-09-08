const EXPRESS = require('express');
const PATH = require('path');
const FS = require('fs');
const BODY_PARSER = require('body-parser');
const _ = require('underscore');

const PORT = 8080;
// appをカレントとしたときのcontrollerのディレクトリ
const CONT_LOCAT = './controllers';

const APP = EXPRESS();

// 描画エンジンにJadeを登録．
APP.set('view engine', 'jade');
// 静的ホスティングする．(これで静的ファイルはassets/以降のディレクトリ名で指定可能になる)
APP.use(EXPRESS.static(PATH.join(__dirname, 'assets')));
// BODY_PARSERの使用
APP.use(BODY_PARSER.urlencoded({ extended: true }));
APP.use(BODY_PARSER.json());

// contrllerのファイル一覧を入れる(controllerの*.js)．(実行時処理)
let aryControllFiles = [];
FS.readdir('./controllers', (err_, files_) => {
	if (err_) throw err_;
	_.each(files_, (file_, index_) => {
		aryControllFiles.push(file_.replace('.js', ''));
	});
});

// jsファイルの呼び出し．
function callJs(dir_, req_, res_, method_) {
	const _responce = require(dir_);
	_responce(req_, res_, method_);
};

// dir_はControllerのDirectoryだけ教えろという意味．
function callController(files_, dir_, req_, res_, method_) {
	const _URL = req_.url.split('/');

	const _RETURN = _.some(files_, file_ => {
		if(_URL[1] == file_) {
			callJs(`${dir_}/${file_}`, req_, res_, method_);
			return true;
		} else if(_URL[1] == "") {
			callJs(dir_ + '/index', req_, res_, method_);
			return true;
		}
		return false;
	});
	if(_RETURN == false) {
		callJs(dir_ + '/404', req_, res_, method_);
	}
};

// GETリクエストがあった場合の処理
APP.get('/*', (req_, res_) => {
	callController(aryControllFiles, CONT_LOCAT, req_, res_, 'GET');
});

// POSTリクエストがあった場合の処理
APP.post('/*', (req_, res_) => {
	callController(aryControllFiles, CONT_LOCAT, req_, res_, 'POST');
});

APP.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log('Press Ctrl+C to quit.');
});