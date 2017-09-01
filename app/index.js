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
	});
});


// ドキュメントルートにリクエストがあった場合の処理
APP.get("/*", (req_, res_) => {
	let _url = req_.url.split("/");
	console.log(_url);
	// req_のURLを取得して，/の後ろが8行目で作った配列の中身と一致していたらそのモジュールを実行する．
	_.each(aryControllFiles, (file_, index_) => {
		if(_url[1] == file_) {
			var Movie = require(`./controllers/${file_}`);
			Movie(req_, res_);
		} else if(_url[1] == "") {
			// あとで
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