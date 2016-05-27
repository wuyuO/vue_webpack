import {TestResource} from './resources.js'

export default{
	testMethod:function(data){
		return TestResource.save({method:'user_getUserInfo'},data)
	}
}