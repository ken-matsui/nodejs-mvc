module.exports = (req_, res_) => {
	const _URL = __dirname.replace("/controllers", "");
	res_.sendFile(_URL + "/views/404.html");
}