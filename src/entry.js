// import css from "./asset/css/test.less";
// document.write("this is entry.js");
import Vue from "vue";
import VueRouter from "vue-router";
import page from "./components/page";
import { configRouter } from './router.js';

Vue.use(VueRouter);
Vue.config.debug = true;

// create router
var router = new VueRouter({
	history:true,
	saveScrollPosition:true
});

configRouter(router);

//let model = new Vue(page);

const App = Vue.extend(page)
router.start(App, '#page')

window.router = router