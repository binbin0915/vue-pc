/* 
    封装axios拦截器
*/
import axios from 'axios';

const instance = axios.create({
	// / 就是当前服务器地址
	baseURL: '/mock', // 公共的基础路径
	headers: {}
});
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Message } from 'element-ui';
// 设置请求拦截器
instance.interceptors.request.use(
	(config) => {
		// config 请求的配置对象
		// 将来发送请求（请求地址，请求参数，请求方式等）都会在config中找到

		// 开始进度条
		NProgress.start();

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
        const {message} = response.data;
        // 提示错误
        Message.error(message)
		// 功能失败，返回失败的Promise
		return Promise.reject(message);
	},
	// 响应失败：当响应状态码不是 2xx
	(error) => {
		NProgress.done();
        const message = error.message || '网络错误';
        // 提示错误
        Message.error(message)
		return Promise.reject(message);
	}
);

export default instance;
