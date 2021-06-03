<template>
  <div id="demo7">
       <h1>Demo7</h1>
       <Clock>
           <span style="color:red;">Current time : </span>
       </Clock>
        <Clock>
           <span style="color:green;">Current time : </span>
       </Clock>
       
       <!-- Using fallback (default) content  -->
       <Clock/>
       
        <Clock>
            <span style="color:orange;">เวลาปัจจุบัน</span>
            <template v-slot:header>
                <h1>Header</h1>
            </template>
            <template v-slot:footer>
                <h3>Footer</h3>
            </template>
        </Clock>

  </div>
</template>

<script>
import Clock from "@/components/helper/Clock.vue";
export default {
 name:"demo7",
 data() {
     return {
         
     }
 },
 components:{
     Clock
 }
}
</script>

<style>

</style>