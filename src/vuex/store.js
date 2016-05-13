// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const state = {
// 	// 设置启动状态
// 	count:0
// }

// const mutations = {
// 	INCREMENT(state,amount){
// 		state.count = state.count + amount
// 	}
// }

// export default new Vuex.Store({
// 	state,
// 	mutations
// })

import Vue from 'vue'
import Vuex from 'vuex'
import crement from './modules/crement.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		crement
	}
})