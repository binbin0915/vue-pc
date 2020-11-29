import request from '@utils/request';

// 获取首页三级分类数据
export const getBaseCategoryList = () => {
	return request({
		method: 'GET',
		url: '/product/getBaseCategoryList'
	});
};
