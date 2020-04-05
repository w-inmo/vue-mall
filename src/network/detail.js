import { http } from "./http.js";

export default function getDetail(id) {
	return http({
		url: "/detail",
		params: { id }
	});
};
