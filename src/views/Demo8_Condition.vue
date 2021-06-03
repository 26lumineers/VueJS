<template>
  <div id="demo8">
    <h1>Demo 8</h1>
    <input type="text" v-model="type">
    <div v-if="type==='A'">
        I am A
    </div>
    <div v-else-if="type==='B'">
        I am B
    </div>
    <div v-else>
        Im not A OR B AND C
    </div>

    <div v-if="isShow">
        Blink
        <!-- show but display none in style if you inspect -->
    </div>
  </div>
</template>

<script>
export default {
  name: "demo8",
  mounted() {
      setInterval(()=>{
          this.isShow=!this.isShow;
      },1000)
  },
  data(){
      return{
          type:"",
          isShow:true
      }
  }
};
</script>

<style>
</style>