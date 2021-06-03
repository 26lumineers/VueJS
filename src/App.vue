<template>
  <div id="app">
    <Header />
    <Content />
    <Footer
      @onClock="onClock"
      title="copyright 2020 by FidTrainning"
      color="grey"
    />
    <span>{{ time }}</span>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Content from "@/components/layout/Content.vue";
import moment from "moment";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Content,
  },
  data() {
    return {
      time: "",
    };
  },
  methods: {
    onClock(value) {
      // this.time = value
      this.time = moment(value).format("MM/DD/YY hh:mm:ss");
    },
  },
};
</script>

<style>
</style>