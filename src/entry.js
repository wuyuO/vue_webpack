// import css from "./asset/css/test.less";
// document.write("this is entry.js");
import Vue from "vue";
import pagebar from "./components/pagebar";

Vue.config.debug = true;

new Vue(pagebar);