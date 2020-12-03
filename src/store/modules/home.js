// home组件的vuex状态
import { getBaseCategoryList,getBanners,getFloors } from '@api/home.js';
export default {
	state: {
		categoryList: [], // 首页三级分类列表数据
		banners:[], // 首页轮播图数据
		floors:[] // 首页楼层数据
	},
	getters: {},
	actions: {
		// 获取首页三级分类列表数据
		async getcategoryList({ commit }) {
			// 发送请求
			const categoryList = await getBaseCategoryList();
			// 触发mutation函数
			commit("GET_BASECATEGOTYLIST", categoryList);
		},

		async reqgetBanners({commit}) {
			const banners = await getBanners()
			commit("REQ_GETBANNERS",banners)
		},

		async reqgetFloors({commit}) {
			const floors = await getFloors()
			commit("REQ_GETFLOORS",floors)
		},
		
	},
	mutations: {
		GET_BASECATEGOTYLIST(state, categoryList) {
			state.categoryList = categoryList;
		},

		REQ_GETBANNERS(state,banners){
			state.banners = banners
		},

		REQ_GETFLOORS(state,floors) {
			state.floors = floors
		}
	}
};
