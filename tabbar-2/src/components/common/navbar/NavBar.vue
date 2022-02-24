<template>
  <div class="nav-bar">
    <!-- 设置具名插槽 对应去替换 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

  }
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    /* background-color: red; */
    text-align: center;
  }
  .left, .right {
    width: 60px;
    /* background-color: blue; */
  }
  .center {
    /* background-color: red; */
    flex: 1;
  }
</style>