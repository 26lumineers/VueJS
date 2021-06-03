<template>
  <div id="footer" class="footer">
    <span :style="{color}">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
      setInterval(()=>{
          this.$emit("onClock",Date()) //emit event to parent cmp
      },100)
  },
  props:[
      "title",
      "color"
  ]
};
</script>

<style scoped>
.footer {
  font-size: 15px;
  padding-top: 10px;
}
</style>