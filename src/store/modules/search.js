import { reqGetProductList } from '@api/search.js';

export default {
	state: {
		ProductList:{
            trademarkList: [],
            attrsList: [],
            goodsList: [],
            totalPages:""
        },
		
	},
	getters: {
		trademarkList(state) {
			return state.ProductList.trademarkList; // 品牌数据
		},
		attrsList(state) {
			return state.ProductList.attrsList; // 品牌属性数据
		},
		goodsList(state) {
			return state.ProductList.goodsList; // 商品数据
        },
        totalPages(state) {
            return state.ProductList.totalPages
        }
	},

	actions: {
		async GetProductList({ commit }, data = {}) {
			const ProductList = await reqGetProductList(data);
			commit('GET_PRODUCT_LIST', ProductList);
		}
	},

	mutations: {
		GET_PRODUCT_LIST(state, ProductList) {
			state.ProductList = ProductList;
		}
	}
};
