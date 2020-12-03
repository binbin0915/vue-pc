import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入公共资源
import './style/reset.css';

// 引入mockServer，为了加载里面的代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import './mock/mockServer'
import './style/iconfont.css'
import './plugins/element.js';
Vue.config.productionTip = false;

new Vue({
	beforeCreate(){
		Vue.prototype.$bus = this
	},
	render: (h) => h(App),
	router,
	store
}).$mount('#app');
