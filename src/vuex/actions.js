// store 会作为action的第一个参数
// 此方法只用到 dispatch()
// 采用es6解构
export const incrementCounter = function({ dispatch, state}){
	dispatch('INCREMENT',1)
}