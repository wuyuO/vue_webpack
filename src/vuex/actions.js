// store 会作为action的第一个参数
// 此方法只用到 dispatch()
// 采用es6解构
import * as type from "./type.js"
import api from "../api/index.js"

export const incrementCounter = function({ dispatch, state}){
	api.testMethod({type:"test"}).then(response=>{
		console.log("success");
	},response=>{
		console.log("error");
	})
	dispatch(type.INCREMENT,1)
}

export const decrementCounter = function({dispatch, state}){
	dispatch(type.DECREMENT,1)
}