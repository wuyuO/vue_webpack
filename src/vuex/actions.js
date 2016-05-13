// store 会作为action的第一个参数
// 此方法只用到 dispatch()
// 采用es6解构
import * as type from "./type.js"

export const incrementCounter = function({ dispatch, state}){
	dispatch(type.INCREMENT,1)
}

export const decrementCounter = function({dispatch, state}){
	dispatch(type.DECREMENT,1)
}