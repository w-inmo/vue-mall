const fs = require("fs"),
	path = require("path"),
	url = require("url");

function router(req, res) {
	
	const myUrl = url.parse(req.url, true);
	
	if (myUrl.pathname === "/home") {
	
		const filePath = path.join(__dirname, ".." + "/data" + req.url + "/home.json");
		myReadFile(filePath, res);

	} else if (myUrl.pathname === "/home/recommend") {

		const filePath = path.join(__dirname,
			`../data${myUrl.pathname}/${myUrl.query.type}/${myUrl.query.type}.json`);
		myReadFile(filePath, res);
		
	} else if (myUrl.pathname === "/detail") {

		const filePath = path.join(__dirname, ".." + `/data/detail/${myUrl.query.id}/detail.json`);
		myReadFile(filePath, res);

	} else {

		// 防止请求 favicon.ico 没有文件出错
		if (req.url === "/favicon.ico") return res.end('');

		myReadFile(path.join(__dirname, "../" + req.url), res);

	}
};

function myReadFile(path, res) {
	fs.readFile(path, (err, data) => {
		if (err) throw err;

		res.end(data);
	});
}

module.exports = router
