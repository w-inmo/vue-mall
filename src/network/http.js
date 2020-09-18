import axios from "axios";

export function http(config) {
	const instance = axios.create({
		baseURL: "http://127.0.0.1:3000",
		timeout: 10000,
	});

	instance.interceptors.request.use(config => {
		return config;
	}, err => {
		if (err) throw err;
	});

	instance.interceptors.response.use(config => {
		return config.data;
	}, err => {
		if (err) throw err;
	});

	return instance(config);
};
