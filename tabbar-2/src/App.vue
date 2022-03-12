<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>
// 导入组件后 需在components中注册
import Tabbar from "./components/common/Tabbar/Tabbar.vue";

export default {
  name: "App",
  components: {
    Tabbar,
  },
};
</script>

<style>
/* 若在js中引用无需加@ 但是在style标签中需加@ */
/* @import "@/assets/css/base.css"; */
</style>
