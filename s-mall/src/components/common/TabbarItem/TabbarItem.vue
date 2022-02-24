<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!--  -->
    <!-- div包起来 替换时插槽被完全替换 动态绑定的class 无法显示 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbar_item",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // 想让用户返回就push 否则 replace
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  /* background-color: pink; */
  /* flex布局 设置1后会将其均等分 */
  flex: 1;
  /* 设置文字居中 实现想达成的效果 */
  text-align: center;
  /* tab-bar 高度都为49px 但此处无需设置 可能是iphone默认设置了 */
  height: 49px;
  font-size: 12px;
  /* 怪异盒模型 */
  padding-top: 5px;
  box-sizing: border-box;
}
/* 去除图片与文字间默认的3px */
/* vertical-align: middle;  */
.tab-bar-item .spf {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.tab-bar-item .spf2 {
  width: 21px;
  height: 21px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>