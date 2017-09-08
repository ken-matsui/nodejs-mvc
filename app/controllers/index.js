module.exports = (req_, res_, method_) => {
	switch (method_) {
		case 'GET':
			res_.render('index');
			break;
		case 'POST':
			let _tag = { location: 'index' };
			res_.json(Object.assign(_tag, req_.body));
			break;
	}
}