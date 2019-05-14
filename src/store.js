import Vue from 'vue'
// 1、引入 vuex 对象
import Vuex from 'vuex'
// 2、使用 vuex
Vue.use(Vuex)

// 引入module 1
import Num from './num1'


// 3、创建 store 对象
let store = new Vuex.Store({
  // 出现同名函数或变量的时候，为了保护其不被覆盖
  // 在文档中还有某个命名空间的概念
  modules:{
    // 不会影响使用，都是大家的
    num:Num
  }
})

export default store

// export default new Vuex.Store({
//   //
//   state: {
//
//   },
//   mutations: {
//
//   },
//   actions: {
//
//   }
// })
