<template>
  <div id="demo11">
      <h1>demo 11 : variable and state</h1>
      <div>{{count}}</div>
      <div>{{Math.random()}}</div>
      <div>Time stamp : {{timestamp}}</div>
      <button @click="timestamp=Date.now()">Update Timestamp</button>
      <button @click="count++">Update Count</button>
  </div>
</template>

<script>
export default {
name:"demo11",
created(){
    this.timestamp=0;
},
mounted() {
    setInterval(()=>{
        // this.count++;
        // console.log(this.timestamp);
    },100)
},
data() {
    return {
        count:0, // local state
        // timestamp:0
    }
},
}
</script>

<style>

</style>