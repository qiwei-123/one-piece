<template>
  <div>
    <h1>{{ $route.params.userId }}</h1>
    <h2>{{ userId }}</h2>
    <!-- <router-link :to="/user/+userId" tag="button" @click="retClick"> -->
    <router-link to="/home/news" tag="button">
      返回首页
    </router-link>
    <router-link to="/profile" tag="button">跳转用户信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "user",
  methods: {
    // retClick() {
    //   this.$router.push("/user/Kate");
    // },
    // proClick() {
    //   this.$router.push({
    //     path: "/profile",
    //     query: {
    //       name: 'Cat',
    //       age: 18,
    //       height: '1.81'
    //     },
    //   });
    // },
  },
  computed: {
    userId() {
      // $route 当前活跃对象是谁 $route就是谁
      return this.$route.params.userId;
    },
  },
};
</script>

<style lang="scss">
</style>