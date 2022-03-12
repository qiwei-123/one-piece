<template>
  <div class="back-top">
    <img src="@/img/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    topClick(){
      console.log('111');
    }
  }
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
}
.back-top img {
  width: 35px;
  height: 35px;
  color: aliceblue;
}
</style>