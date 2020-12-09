import { reqGetauth } from "@api/trade";
export default {
    state:{
        cartList:[]
    },

    getters() {

    },

    actions:{
        async getauth({commit},{page,limit}){
           const cartList = await reqGetauth(page,limit)
            commit("GET_AUTH",cartList)
         },
    },

    mutations:{
        GET_AUTH(state,cartList){
            state.cartList = cartList
        }
    }
}