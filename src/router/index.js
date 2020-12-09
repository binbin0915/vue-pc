import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

// import Home from '../views/Home';
// import Register from '../views/Register';
// import Login from '../views/Login';
// import Search from '../views/Search';
// import A from '../views/Login/A';
// import B from '../views/Login/B';
// import Detail from '../views/Detail';
// import AddCartSuccess from '../views/AddCartSuccess';
// import ShopCart from '../views/ShopCart';
// import Trade from '@views/Trade';
// import Pay from '@views/Pay';
// import PaySuccess from '@views/PaySuccess';
// import Center from '@views/Center';

// 路由组件懒加载
// 1.会将路由组件打包成单独的js文件( 文本pack代码分割)
// 2.异步加载路由组件(需要使用才加载)（Vue代码异步加载组件功能）
const Home = () => import(/* webpackChunkName: "Home" */'../views/Home');
const Register = () => import(/* webpackChunkName: "Register" */'../views/Register');
const Login = () => import(/* webpackChunkName: "Login" */'../views/Login');
const Search = () => import(/* webpackChunkName: "Search" */'../views/Search');
const A = () => import(/* webpackChunkName: "A" */'../views/Login/A');
const B = () => import(/* webpackChunkName: "B" */'../views/Login/B');
const Detail = () => import(/* webpackChunkName: "Detail" */'../views/Detail');
const AddCartSuccess = () => import(/* webpackChunkName: "AddCartSuccess" */'../views/AddCartSuccess');
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */'../views/ShopCart');
const Trade = () => import(/* webpackChunkName: "Trade" */'../views/Trade');
const Pay = () => import(/* webpackChunkName: "Pay" */'../views/Pay');
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */'../views/PaySuccess');
const Center = () => import(/* webpackChunkName: "Center" */'../views/Center');

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

const router = new VueRouter({
	mode:"hash",
	// mode:"history",
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
		},
		{
			name: 'AddCartSuccess',
			path: '/addCartSuccess',
			component: AddCartSuccess
		},
		{
			name: 'ShopCart',
			path: '/shopcart',
			component: ShopCart
		},
		{
			name: 'Trade',
			path: '/trade',
			component: Trade
		},
		{
			name: 'Pay',
			path: '/pay',
			component: Pay
		},
		{
			name: 'PaySuccess',
			path: '/paysuccess',
			component: PaySuccess
		},
		{
			name: 'Center',
			path: '/center',
			component: Center
		}
	],
	// 每次切换路由页面滚动条位置
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});


/* 
	路由守卫：
		1.是什么
			在路由跳转之前、之中、之后触发的钩子函数（类似于生命周期）
		2.分类
			全局守卫
				全局前置守卫：在切换路由之前触发
					beforeEach、
				全局解析守卫：之中
					beforeResolve
				全局后置守卫：之后
					afterEach
			路由守卫
			组件守卫
*/

// 需要进行权限验证的地址
const permissionPaths = [ '/pay', '/center', '/trade', '/paysuccess','/shopCart' ];
// 路由全局前置守卫
router.beforeEach((to, from, next) => {
	/* 
		to 要去的路由对象（$route）
		from 从哪来的路由对象（当前路由对象）($route)
		next 是一个函数：跳转到哪个路由的方法
			比如：要去to这个路由 next()
				要去登录路由 next("/login")  next({path:"/login"}) next(name:"login")

		权限验证：
			如果用户未登录，不允许去 trade pay center 等路由
	*/
	if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
		return next('/login');
	}
	next();
});

export default router;
