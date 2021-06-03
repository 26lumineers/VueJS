<template>
  <div id="header">
      <ul>
      <li><router-link to="/home"> <button>Home</button></router-link></li>
      <li><router-link to="/about"><button>About</button> </router-link></li>
      <li><router-link to="/demo1"> <button>Demo1</button></router-link></li>
      <li><router-link to="/demo2"> <button>Demo2_EventMethods</button> </router-link></li>
      <li><router-link to="/demo3"> <button>Demo3_data</button> </router-link></li>
      <li><router-link to="/demo5"> <button>Demo5_Binding</button> </router-link></li>
      <li><router-link to="/demo6"> <button>Demo6_Form</button> </router-link></li>
      <li><router-link to="/demo7"> <button>Demo7_Slot</button> </router-link></li>
      <li><router-link to="/demo8"> <button>Demo8_Condition</button> </router-link></li>
      <li><router-link to="/demo9"> <button>Demo9_Loop</button> </router-link></li>
      <li><router-link to="/demo10"> <button>Demo10_LifecycleHook</button> </router-link></li>
      <li><router-link to="/demo11"> <button>Demo11_Variable_and_State</button> </router-link></li>
      <li><router-link to="/demo12"> <button>Demo12_ref</button> </router-link></li>
      <li><router-link to="/demo13"> <button>Demo13_Filter</button> </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
name:"Header"
}
</script>

<style scoped>
ul{
   margin:0;
   padding: 0;
 }
 li{
   display: inline;
   margin-right: 10px;
 }

</style>