<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ counter }}</h2>
    <!-- <button @click="add">+</button> -->
    <!-- <button @click="xid">-</button> -->
    <son-text></son-text>
  </div>
</template>

<script>
import SonText from "./components/son.vue";
import INCREMENT from "./store/mutation-type";

export default {
  name: "App",
  data() {
    return {
      message: "Hello World",
      counter: "0",
    };
  },
  components: {
    SonText,
  },
  //   computed: {
  //     count() {
  //       // return this.$store.state.counter;
  //     },
  //   },
  //   methods: {
  //     add() {
  //       // this.$store.commit("increment");
  //     },
  //     xid() {
  //       // this.$store.commit("decrement");
  //     },
  // updateInfo(){
  //   this.$store.dispatch('aUpdateInfo', ()=>{
  //   console.log('此处调用成功');
  // })
  // }
  //   }
};
</script>

<style>
</style>
