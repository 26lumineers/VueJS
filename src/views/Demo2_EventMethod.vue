<template>
<div id="demo2">
  <h1>Event Method Page</h1>
  <button v-on:click="clickMe">Clickme</button>
  <button v-on:click="clickMe2('Welcome to VueJs')">Clickme2</button>
  <button @click="clickMe3('Hello mother f')">Clickme3</button>
  <h3>{{getTimestamp()}}</h3>
</div>
</template>

<script>
export default {
name:"demo2",
mounted() {
    this.initial()
},
methods: {
    initial(){
        console.log("Initialization")
    },
    clickMe(){
        alert('Hi')
    },
    clickMe2(message){
        alert(message)
    },
    clickMe3(message){
        alert(message)
    },
    getTimestamp(){
        return Date()
    }
},
}
</script>

<style>

</style>