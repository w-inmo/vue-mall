const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	publicPath: '././',
	outputDir: "www",
	chainWebpack: (config) => {
		config.resolve.alias.set("assets", resolve('src/assets'))
			.set("components", resolve('src/components'))
			.set("common", resolve('src/common'))
			.set("network", resolve('src/network'))
			.set("views", resolve('src/views'));
	},
};
