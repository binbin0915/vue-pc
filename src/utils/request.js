/* 
    封装axios拦截器
*/
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Message } from 'element-ui';
// import getuserTempId from "@utils/getuserTempId"
import store from "../store"

/* 
userTempId 未登录用户的临时id
	通过uuid来生成
1.因为每个userTempId自己的购物车数据
	后台会根据userTemId的值来返回购物车数据
	如果userTempId刷新的，购物车数据就没了（清空了）
	所以生成后要存储起来，未来将来可以反复使用
		localStorage 永久存储
		xxx.setItem(key,value) 存储
		xxx.getItem(key) 读取
		xxx.removeItem(key) 删除单个
		xxx.clear() 清空所有
		
2.第一次userTempId在哪里初始化

3.整体流程：
	- 先读取本地localStorage数据，看是否有userTempId
	- 如果有，直接使用
	- 如果没有，需要创建userTemId，同时保存在localStorage中
*/

const instance = axios.create({
	// / 就是当前服务器地址
	baseURL: '/api', // 公共的基础路径
	headers: {}
});

// const userTempId = getuserTempId()
// const token = localStorage.getItem("token")
// 设置请求拦截器
instance.interceptors.request.use(
	(config) => {
		// config 请求的配置对象
		// 将来发送请求（请求地址，请求参数，请求方式等）都会在config中找到

		// 开始进度条
		NProgress.start();
		const token = store.state.user.token;
		if(token){
			config.headers.token = token
		}
		// config.headers.userTempId = userTempId;
		// config.headers.token = token;

		return config;
	}
	// 初始化Promise.resolve()返回默认成功的Promise，只会触发成功回调
);
// 设置响应拦截器
instance.interceptors.response.use(
	// 响应成功：当响应状态码为 2xx
	(response) => {
		/* 
            响应成功不能代表功能成功只是代表有响应结果
                功能是否成功看 code
                    成功：200
                    失败：201

                返回一个具体为
                    成功：成功的数据
                    失败：失败的原因
                的结果
        */

		// 进度条结束
		NProgress.done();

		if (response.data.code === 200) {
			// 返回成功的响应数据
			return response.data.data;
		}
		const { message } = response.data;
		// 提示错误
		Message.error(message);
		// 功能失败，返回失败的Promise
		return Promise.reject(message);
	},
	// 响应失败：当响应状态码不是 2xx
	(error) => {
		NProgress.done();
		const message = error.message || '网络错误';
		// 提示错误
		Message.error(message);
		return Promise.reject(message);
	}
);

export default instance;
