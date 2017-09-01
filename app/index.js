const EXPRESS = require('express');
const FS = require('fs');
const _ = require('underscore');

const PORT = 8080;

const APP = EXPRESS();

// contrllerのファイル一覧を入れる(controllerの*.js)．(実行時処理)
let aryControllFiles = [];
FS.readdir("./controllers", (err_, files_) => {
	if (err_) throw err_;
	_.each(files_, (file_, index_) => {
		aryControllFiles.push(file_.replace(".js", ""));
	});
});

// jsファイルの呼び出し．
function callJs(dir_, req_, res_) {
	const _responce = require(dir_);
	_responce(req_, res_);
};

// dir_はControllerのDirectoryだけ教えろという意味．
function callController(url_, files_, dir_, req_, res_) {
	const _RETURN = _.some(files_, file_ => {
		if(url_[1] == file_) {
			callJs(`${dir_}/${file_}`, req_, res_);
			return true;
		} else if(url_[1] == "") {
			callJs(dir_ + "/index", req_, res_);
			return true;
		}
		return false;
	});
	if(_RETURN == false) {
		callJs(dir_ + "/404", req_, res_);
	}
};

// GETリクエストがあった場合の処理
APP.get("/*", (req_, res_) => {
	let _url = req_.url.split("/");
	callController(_url, aryControllFiles, "./controllers", req_, res_);
});

APP.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log("Press Ctrl+C to quit.");
});