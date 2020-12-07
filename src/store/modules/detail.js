import { reqGetDetailList } from '@api/detail';

export default {
	state: {
		productDetail: {
			categoryView: {},
			spuSaleAttrList: [],
			skuInfo: {
				skuImageList:[]
			}
		}
	},

	getters: {
		categoryView(state) {
			return state.productDetail.categoryView;
		},
		spuSaleAttrList(state) {
			return state.productDetail.spuSaleAttrList;
		},
		skuInfo(state) {
			return state.productDetail.skuInfo;
		}
	},

	actions: {
		async getDetailList({ commit }, id) {
			const productDetail = await reqGetDetailList(id);
			commit('GETDETAILLIST', productDetail);
		}
	},

	mutations: {
		GETDETAILLIST(state, productDetail) {
			state.productDetail = productDetail;
		}
	}
};
