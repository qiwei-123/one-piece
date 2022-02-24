<template>
  <div class="back-top" @click="topClick">
    <img src="tabbar-2/assets/img/top.png" alt="">
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
  width: 43px;
  height: 43px; 
}
</style>