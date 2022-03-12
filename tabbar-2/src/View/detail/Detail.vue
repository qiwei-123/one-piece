<template>
  <div>
    <div id="back">
      <img src="@/img/back.png" alt="back" @click="backClick" />
      <span>详情页</span>
    </div>
    <div id="content">
      <img :src="detailInfo.img" alt="" />
      <p><span>商品名称 : </span>{{ detailInfo.title }}</p>
      <p><span>价格 : </span>{{ detailInfo.price }}</p>
      <p class="btn-text" @click="addClick">加入购物车</p>
    </div>
    <!-- <button class="btn">+</button> -->
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      detailInfo: this.$route.query,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
      // 效果相同
      // this.$router.go(-1);
    },
    addClick() {
      let newList = [...this.$store.getters.list, this.detailInfo];
      this.$store.dispatch("setList", newList);

      console.log("111", this.$store.getters.list);
    },
  },
  created() {
    // this.$route.query;
    console.log(this.$route.query);
  },
};
</script>

<style lang="scss" scoped>
#back {
  width: 100%;
  height: 35px;
  line-height: 35px;
  background-color: red;
  text-align: center;
  position: relative;
  img {
    width: 35px;
    position: absolute;
    left: 0;
  }
  span {
    color: whitesmoke;
  }
}
#content {
  width: 100%;
  background-color: #eee;
  height: 100vh;
  p span {
    font-weight: 500;
  }
  img {
    width: 100%;
    height: 300px;
    // padding: 3px;
    margin: 2px 0;
  }
  // .btn {
  //   font-size: 30px;
  //   width: 50px;
  //   height: 50px;
  //   background-color: white;
  // }
  .btn-text {
    font-size: 9px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    // text-align: center;
    text-align: center;
    color: white;
    background-color: red;
    margin: 10px;
    padding: 0 3px;
  }
}
</style>