import request from "@utils/request"

export const reqGetDetailList = (id) => {
	return request({
		method: 'GET',
		url: `item/${id}`
	});
};