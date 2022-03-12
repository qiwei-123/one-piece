<template>
  <div class="wrapper">
    <feature-view />
  </div>
</template>

<script>
// 原生js实现 滚动 overflow: scroll;
// 设置一个固定高度使内容在此高度中进行滚动 超出高度隐藏
// 缺点 卡顿 不如 better-scroll 丝滑
// better-scroll 滚动条拖拽到底部时 会有空白的空间
// 若在固定高度内隐藏 只需overflow: hidden;
import FeatureView from "../Home/childSwiper/FeatureView.vue";
export default {
  name: "Category",
  components: { FeatureView },
};
</script>

<style>
</style>