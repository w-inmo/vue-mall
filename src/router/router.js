import Vue from "vue";
import VueRouter from "vue-router";

// 路由懒加载
const Home = () => import("views/Home/Home"),
	Classify = () => import("views/Classify/Classify"),
	Profile = () => import("views/Profile/Profile"),
	Shopping = () => import("views/Shopping/Shopping"),
	Detail = () => import("views/Detail/Detail");

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/shopping",
		component: Shopping,
	},
	{
		path: "/classify",
		component: Classify,
	},
	{
		path: "/profile",
		component: Profile,
	},
	{
		path: "/detail",
		component: Detail,
	}
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
