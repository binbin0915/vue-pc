// 汇总所有vuex的模块
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from "./user"
import auth from "./auth"
// 统一暴露出去
export default {
    home,
    search,
    user,
    detail,
    shopcart,
    auth
}