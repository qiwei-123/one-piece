<template>
  <div id="app">
    <router-view />
    <main-tabbar />
  </div>
</template>

<script>
// 开始导入组件
import MainTabbar from "../src/components/content/MainTabbar/MainTabbar.vue";

export default {
  name: "App",
  components: { MainTabbar },
};
</script>


<style>

</style>
