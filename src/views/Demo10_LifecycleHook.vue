<template>
  <div id="demo10">
      <h1>demo10 : LifecycleHook</h1>
      <button @click="add">change</button>
      <div>View : {{counter}}</div>
  </div>
</template>

<script>
export default {
name:"demo10",
methods: {
    add(){
        this.counter++;
    }
},
data() {
    return {
        counter:0
    }
},
// method 
beforeCreate(){
    console.log("beforeCreated");
},
created(){
    console.log("created");
},
mounted() {
    console.log("mounted");
},
beforeUpdate() {
    console.log("beforeUpdate");
},
updated(){
    console.log("updated");
},
beforeUnmount() {
    console.log("beforeDestroy");
},
unmounted() {
    console.log('destroyed');
},

}
</script>

<style>

</style>