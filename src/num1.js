import Vue from 'vue'

export default {
    // 配置 module:{state,getter,mutation,action}
    state:{
        num: 5
    },
//  获取设置
    getters:{
        getNum(state){ // 获取器离state很近，可以直接拿来用
            return state.num
        },
        getText(state){
            return `[[${state.num}]]`
        },
        getName(state){
            return state.name
        }
    },

    mutations:{
        // 更改的方式，更改也和state很近，直接用
        addNum(state){
            state.num++
        },
        //接收的参数（state,data）
        addByNum(state,num){
            state.num += num
        },
        // mutation对state的操作只能是同步的，异步的mutation
        addByNumAsync(state,num){
            // 只能是同步，否则丢失记录
            setTimeout(function () {
                state.num += num
            },0)
        },
        addName(state,name){
            // 必须通过 Object.defineProperty 实现响应式
            if (!state.name){
                // 实例对象 .$xxx
                // 构造函数 .xxx
                Vue.set(state,'name',name)
            }else{
                state['name'] = name // 踩坑，插入不成功
            }

        }
    },
    actions:{
        // $store.getters||commit||state,data
        // 接收的参数是整个store对象，或者使用解构赋值{commit}
        addByNumAction({commit}, num) {
            setTimeout(function () {
                commit('addByNum',num)
            }, 0)
        },
        //添加属性
        addName({commit},name){
            commit('addName',name)
        }
    }

}
