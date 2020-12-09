import request from '@utils/request';

export const reqTrade = () => {
	return request({
		method: 'GET',
		url: '/order/auth/trade'
	});
};

export const reqSubmitOrder = ({
	tradeNo,
	consignee,
	consigneeTel,
	deliveryAddress,
	paymentWay,
	orderComment,
	orderDetailList,
}) => {
	return request({
		method: "POST",
		url: "/order/auth/submitOrder",
		params: {
			// query参数
			tradeNo,
		},
		data: {
			// body参数
			consignee,
			consigneeTel,
			deliveryAddress,
			paymentWay,
			orderComment,
			orderDetailList,
		},
	});
};
// 微信支付二维码
export const reqweixin = (orderId) => {
	return request({
		method:"GET",
		url:`/payment/weixin/createNative/${orderId}`
	})
}
// 订单列表信息
export const reqGetauth = (page,limit) => {
	return request({
		method:"GET",
		url:`/order/auth/${page}/${limit}`
	})
}
