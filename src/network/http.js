import axios from "axios";

export function http(config) {
	const instance = axios.create({
		baseURL: "http://122.51.18.70",
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
