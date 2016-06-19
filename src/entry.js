import css from "./asset/css/reset.less";
// document.write("this is entry.js");
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import font from 'font-awesome/css/font-awesome.css'
import jquery from 'jquery'
import Vue from "vue";
import VueRouter from "vue-router";
import app from "./components/App.vue";
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

const App = Vue.extend(app)
router.start(App, '#app')

window.router = router
