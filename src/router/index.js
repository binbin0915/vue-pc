import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Register from '../views/Register';
import Login from '../views/Login';
import Search from '../views/Search';
import A from '../views/Login/A';
import B from '../views/Login/B';
import Detail from '../views/Detail';
// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplate, onAbort) {
	// 如果用户想处理失败，就处理
	if ((onComplate, onAbort)) {
		push.call(this, location, onComplate, onAbort);
	}
	// 如果用户不处理失败，给默认值：空函数
	push.call(this, location, onComplate, () => {});
};

VueRouter.prototype.replace = function(location, onComplate, onAbort) {
	if ((onComplate, onAbort)) {
		replace.call(this, location, onComplate, onAbort);
	}
	replace.call(this, location, onComplate, () => {});
};

// 安装插件
Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/login',
			component: Login,
			// 当组件加载显示时，meta的参数会传到$route中
			// 当组件不加载显示时，meta中的参数不会传
			meta: {
				isFooterHide: true
			},
			children: [
				{
					path: '/',
					component: A,
					meta: {
						isFooterHide: true
					}
				},
				{
					path: 'a',
					component: A,
					meta: {
						isFooterHide: true
					}
				},
				{
					path: 'b',
					component: B,
					meta: {
						isFooterHide: true
					}
				}
			]
		},
		{
			path: '/register',
			component: Register,
			meta: {
				isFooterHide: true
			}
		},
		{
			// ？：代表params参数是可选的
			name: 'search',
			path: '/search/:searchText?',
			component: Search
		},
		{
			name: 'detail',
			path: '/detail/:id',
			component: Detail
		}
	],
	// 每次切换路由页面滚动条位置
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});
