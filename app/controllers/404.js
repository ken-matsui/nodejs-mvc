module.exports = (req_, res_, method_) => {
	switch (method_) {
		case 'GET':
			res_.render('404');
			break;
		case 'POST':
			let _tag = { location: '404' };
			res_.json(Object.assign(_tag, req_.body));
			break;
	}
}