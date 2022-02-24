<template>
  <div>
    <swiper>
      <!-- v-for的使用 需配置key来保证数组每一个数据的唯一性 一般可设置为index 但设置为index是有很大风险的 一般设置为数据中的唯一值 例：id -->
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
  name: "HomeSwiper",
  // 此时封装组件 无法获取数据 使用驼峰标识
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      this.$emit('swiperImageLoad')
    },
  },
  // created(){
  //   console.log('home-swiper---banners',this.banners);

  // }
};
</script>

<style>
</style>