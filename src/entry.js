// import css from "./asset/css/test.less";
// document.write("this is entry.js");
import Vue from "vue";
import page from "./components/page";

Vue.config.debug = true;

let model = new Vue(page);