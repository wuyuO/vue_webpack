export function configRouter (router) {
	router.map({
		// "roter1":{
		// 	name:"router1",
		// 	component:require('./components/router01.vue')
		// },
		// "roter2":{
		// 	name:"router2",
		// 	component:require('./components/router02.vue')
		// }
		"/login":{
			name:"login",
			component:require('./components/login/login.vue')
		},
		"/":{
			name:"home",
			component:require('./components/home/home.vue'),
			subRoutes:{
				'':{
					component:require('./components/table/table.vue')
				}
			}

		}//end home
	})
}
