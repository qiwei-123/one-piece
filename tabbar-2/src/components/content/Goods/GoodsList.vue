<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    />
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: { GoodsListItem },
  props: {
    // 注意类型定义 接到的是对象
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>