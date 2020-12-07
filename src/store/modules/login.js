import { reqLogin } from '@api/user';

export default {
	state: {},

	getters: {},

	actions: {
		login({ commit }, { phone, password }) {
			reqLogin(phone, password);
		}
	},

	mutations: {}
};
