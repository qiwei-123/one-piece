<template>
  <div class="profile">
    <div class="profile-top">
      <img src="@/img/wode.png" alt="" class="img" />
      <span>懒猫Mbh1t</span>
      <img src="@/img/settings.png" alt="" class="setting" />
    </div>
    <ul class="profile-main">
      <li class="order">我的订单</li>
      <li class="logistics">我的物流</li>
      <li class="evaluate">我的评价</li>
      <li class="refund">退款/售后</li>
      <li class="complaint">投诉</li>
      <li class="question">常见问题</li>
    </ul>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>
<script>
// import Question from "./Question/Question.vue";
export default {
  name: "Profile",
  // components: { Question },
  methods: {
    qClick() {
      console.log("Question");
      this.$router.push("Question");
    },
  },
};
</script>

<style scoped>
.profile-top .img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: gainsboro;
  position: relative;
  top: 10px;
  left: 10px;
}
.profile-top .setting {
  width: 40px;
  height: 40px;
  position: fixed;
  right: 5px;
  top: 5px;
}
.profile-top span {
  /* margin-top: 100px;
  margin-left: 20px; */
  position: fixed;
  left: 100px;
  top: 40px;
}
.profile-main {
  margin-top: 30px;
}
.profile-main li {
  height: 30px;
  border-top: 1px gainsboro solid;
  padding-left: 10px;
  justify-content: center;
}
/* .profile-main li：hover {
  cursor: pointer;
} */
.profile-main :nth-child(6) {
  border-bottom: 1px gainsboro solid;
}
</style>