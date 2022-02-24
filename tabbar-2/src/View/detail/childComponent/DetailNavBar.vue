<template>
  <div>
    <nav-bar>
      <div slot="left">
        <img src="" alt="back" @click="backClick" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index == currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
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
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 11px;
}
.title-item {
  flex: 1;
}
.active {
  color: red;
}
</style>