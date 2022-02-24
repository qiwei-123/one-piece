<template>
  <div class="goods-item" @click="itemClick">
    <img src="goodsItem.show.img" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      // 发射到 事件总线 在home 中监听
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push("/detail");
    },
  },
};
</script>

<style>
</style>