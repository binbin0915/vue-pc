import Vue from "vue"
import VueLazyload from 'vue-lazyload'
import image from "../assets/images/loding.gif"
Vue.use(VueLazyload,{
    loading: image,
})