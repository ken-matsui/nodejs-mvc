const EXPRESS = require('express');
const FS = require('fs');
const _ = require('underscore');

const PORT = 8080;

const APP = EXPRESS();

// contrllerのファイル一覧を入れる(controllerの*.js)．
let aryControllFiles = [];
let aryControllDatas = {};
let numIndexLocation;
FS.readdir("./controllers", (err_, files_) => {
	if (err_) throw err_;
	_.each(files_, (file_, index_) => {
		aryControllFiles.push(file_.replace(".js", ""));
		let _val = aryControllFiles[index_];
		if(_val == "index") {
			numIndexLocation = index_;
		}
		aryControllDatas[_val] = require(`./controllers/${_val}.js`);
	});
	console.log(aryControllDatas);
});


// ドキュメントルートにリクエストがあった場合の処理
APP.get("/*", (req_, res_) => {
	let _url = req_.url.split("/");
	// req_のURLを取得して，/の後ろが8行目で作った配列の中身と一致していたらそのモジュールを実行する．
	_.each(aryControllFiles, (file_, index_) => {
		if(_url[1] == file_) {
			aryControllDatas[index_](req_, res_);
		} else if(_url[1] == "") {
			aryControllDatas.index(req_, res_);
		} else {
			// 404を返す
			res_.send("404");
		}
	});
});

APP.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log("Press Ctrl+C to quit.");
});