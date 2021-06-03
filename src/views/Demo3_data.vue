<template>
  <div id="demo3">
      <h1>Demo3 Data</h1>
      <button @click="count++">Count +</button>
      <div>count : {{count}}</div>
      <div>msg : {{message}}</div>
      <div>isLogin : {{isActive}}</div>
      <input type="text" placeholder="Enter Msg" v-model="message">
      <button @click="toggleActiveBtn()">active and deactive</button>
      <h2 v-if="isActive">Yahoo</h2>
      <div>{{account}}</div>
      <div>{{account.username}} {{account.password}}</div>
      <div>{{courses}}</div>
      <ul>
          <li v-for="(item, index) in courses" :key="index">{{index+1}} : {{item}}</li>
      </ul>
  </div>
</template>

<script>   
export default {
name:"demo3",
mounted() {
    this.message="welcome to Fid trainning!"
},
data(){
    return{
        count:0,
        message:"",
        isActive:false,
        account:{
            username:"admin",
            password:"1234"
        },
        courses:[
            "Angular",
            "VueJs",
            "ReactJs",
            "Flutter",
            "UXUI"
        ]
    }
},
methods: {
    toggleActiveBtn(){
        this.isActive=!this.isActive;
    }
},
}
</script>

<style>

</style>