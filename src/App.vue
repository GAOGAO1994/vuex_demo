<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!--可以像下面这样使用，但是不建议-->
    <!--{{ $store.state.num }}-->
    <!--{{ $store.getters.getNum}}-->

    <!--{{getMyNum}}-->
    {{getNum}}<br>{{getText}}
    <br>名字：{{getName}}
    <button @click="add">增加</button><br>
    <button @click="addByNmu">增加一定数量</button><br>
    <button @click="addByNumAction">异步增加一定数量</button>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },

  //开发必踩坑 开始
  created(){
    setTimeout(() =>{
      //在原有属性添加属性，OK
      this.$store.dispatch('addByNumAction',20)

      // 新添加一个属性，不OK
      this.$store.dispatch('addName','Jack')
    },1000)
  },
  //开发必踩坑 结束



  methods:{
    add(){
      // 不建议直接这么做
      this.$store.commit('addNum')
    },
    addByNmu(){
      // 不建议直接这么做
      this.$store.commit('addByNum',4)
    },
    addByNumAction(){
      // 不建议直接这么做
      // this.$store.commit('addByNumAsync',2) //总是会少一步操作

      // 异步处理需要调用Action
      this.$store.dispatch('addByNumAction',5)
    }
  },
  // getter 结合computed使用
  computed:{
    // getMyNum(){
    //   return this.$store.getters.getNum
    // }
  //  使用 mapGetters 辅助函数
    ...mapGetters([
            'getNum',
            'getText',
            'getName'
    ])
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
