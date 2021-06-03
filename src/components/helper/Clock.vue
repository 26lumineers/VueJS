<template>
  <div id="clock">
      <!-- Header slot -->
    <slot name="header"></slot> 
      <!-- if not passive template from parent its will keep default fallback Content -->
    <slot>Now : </slot> {{ time }} 
    <!-- Footer slot -->
    <slot name="footer"></slot> 
    <!-- slot receive content from parent -->
  </div>
</template>

<script>
 import moment from 'moment';
export default {
   
name:"Clock",
data() {
    return {
        time:""
    }
},
mounted() {
    setInterval(()=>{
        this.time=moment(Date()).format("MM/DD/YY hh:mm:ss")
    },1000)
    console.log(this.time)
},
}
</script>

<style>
</style>