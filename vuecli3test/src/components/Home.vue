<template>
  <div>
    <!-- 此处放子路由显示的内容 -->
    <router-link to="/home/news">实时新闻</router-link>
    <br />
    <router-link to="/home/message">实时消息</router-link>
    <router-view></router-view>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "home",
  // actived() {
  //   this.$router.push(this.path);
  // },
  // beforeRouteLeave() {
  //   console.log(this.path);
  //   this.path = this.$route.path;
  // },
};
</script>

<style lang="scss">
</style>