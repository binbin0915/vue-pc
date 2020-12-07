// 汇总所有vuex的模块
import home from './home'
import search from './search'
import login from './login'
import detail from './detail'
import shopcart from './shopcart'
// 统一暴露出去
export default {
    home,
    search,
    login,
    detail,
    shopcart
}