import request from '@utils/request';
import mockRequest from '@utils/mockRequert'
// 获取首页三级分类数据
export const getBaseCategoryList = () => {
	return request({
		method: 'GET',
		url: '/product/getBaseCategoryList'
	});
};


// 获取首页轮播图数据
export const getBanners = () => {
	return mockRequest({
		method: 'GET',
		url: '/banners'
	});
};

// 获取首页楼层数据
export const getFloors = () => {
	return mockRequest({
		method: 'GET',
		url: '/floors'
	});
};
