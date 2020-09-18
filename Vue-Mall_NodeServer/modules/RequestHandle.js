const router = require("./router.js");

module.exports = function(req, res) {

	// 去除跨域限制
	res.setHeader("Access-Control-Allow-Origin", "*");

	switch(req.method)
	{
		case "GET" :
			router(req, res);
			break;
		default: res.end("不支持此协议");
	}
	
};
