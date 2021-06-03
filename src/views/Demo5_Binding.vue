<template>
  <div id="demo5">
    <h1>hi fid Demo5</h1>
    <img v-bind:src="imageUrl" v-bind:height="height" />
    <br />
    <a v-bind:href="google">Dota Link</a>
    <br />
    <a :href="google">Dota Link</a>
    <!-- Binding CSS -->

    <div :class="[error, bolder]">Fid Training</div>
    <!-- Binding Style -->
    <div :style="{ color, fontSize }">Binding Style</div>
    <div :style="isActive ? styleObj : ''">Binding Style Object</div>
    <button @click="isActive = !isActive">Toggle Active</button>
  </div>
</template>

<script>
export default {
  name: "demo5",
  data() {
    return {
      imageUrl:
        "https://www.blognone.com/sites/default/files/externals/7a8f7fdb48d6d78b343d642cc2d6f736.jpg",
      height: 300,
      google: "http://www.google.com",
      error: "error_class",
      bolder: "bolder",
      color: "green",
      fontSize: "40px",
      styleObj: {
        color: "red",
        backgroundColor: "black",
        fontSize: "50px",
      },
      isActive: false,
    };
  },
};
</script>

<style>
.error_class {
  background-color: bisque;
  color: red;
}
.bolder {
  font-weight: 900;
}
</style>