import { getBaseCategoryList } from '@api/home.js';
export default {
	state: {
		categoryList: []
	},
	getters: {},
	actions: {
		async getcategoryList({ commit }) {
			const categoryList = await getBaseCategoryList();
			commit("GET_BASECATEGOTYLIST", categoryList);
		}
	},
	mutations: {
		GET_BASECATEGOTYLIST(state, categoryList) {
			state.categoryList = categoryList;
		}
	}
};
