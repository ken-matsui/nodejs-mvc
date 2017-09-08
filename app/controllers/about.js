module.exports = (req_, res_, method_) => {
	switch (method_) {
		case 'GET':
			res_.render('about');
			break;
		case 'POST':
			let _tag = { location: 'about' };
			res_.json(Object.assign(_tag, req_.body));
			break;
	}
}