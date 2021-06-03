<template>
  <div id="demo12">
      <h1>demo 12 : REF</h1>
      <h1 ref="title">Waiting for change by ref</h1>
     <input 
     type="text"
     ref="input1"
     placeholder="this will be focused automatically">
  </div>
</template>

<script>
export default {
name:"demo12",
mounted() {
    this.$refs["title"].textContent="Fid trainning change ref 555";
    this.$refs["input1"].focus();
    this.$refs["input1"].value="1234";
},
}
</script>

<style>

</style>