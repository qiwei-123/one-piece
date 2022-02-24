<template>
  <div id="app">
    <!-- 
      router-link 默认为a 标签
      通过 tag="button" 将其在渲染时变为button tag="li"
      当 router-link 在页面渲染时 
      会将当前所点击的对象class属性中添加router-link-active
      方便在开发时对其进行 一些样式的操作
      若认为名字过长 可通过 replace active-class="active"
      将此默认class 改为active
      也可通过在 路由配置中 linkActiveClass : "active"
     -->
    <router-link to="/home" tag="button">home</router-link>
    <router-link to="/about" tag="button">about</router-link>
    <router-link :to="/user/ + userId" tag="button">user</router-link>
    <!-- <router-link 
    :to="{query:{name: 'xiaoming',age: 18}}" 
    tag="button">user</router-link> -->
    <!-- <button @click="btn1Click">btn1</button>
    <button @click="btn2Click">btn2</button> -->
    <!-- 此时用到 .vue文件的 name -->
    <keep-alive exclude="Profile">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "Kate",
    };
  },
  methods: {
    btn1Click() {
      // 此时点击按钮跳转对应界面 可返回
      this.$router.push("/home");
      // 不可返回
      // this.$router.replace('/home')
    },
    btn2Click() {
      this.$router.push("/about");
    },
  },
};
</script>

<style>
.router-link-active {
  color: blueviolet;
  width: 50px;
  height: 50px;
  /* font-size: 30px; */
}
</style>
