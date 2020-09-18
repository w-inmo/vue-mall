import {
	http
} from "./http.js";

export function getHomeMultidata() {
	return http({
		url: "/home"
	});
};

export function getHomeGoods(request, page) {
	return http({
		url: `/home/recommend`,
		params: {
			type: `${request}`,
		}
	});
};
