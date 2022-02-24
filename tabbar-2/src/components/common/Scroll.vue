<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
      message: "hahaha",
    };
  },
  mounted() {
    // this.$ref.refName 绑定在组件 获取组整个组件 / 绑定在元素 获取元素对象 确保唯一性(否则class可能出现多个同名)
    // this.scroll = new BScroll(this.$ref.aaa, {
    //   probeType: 3,
    //   click: true,
    //   pullUpLoad: true,
    // });

    // this.bscroll.on("scroll", (position) => {});

    // this.bscroll.on("pullingUp", (position) => {
    //   console.log(上拉加载更多);
    // });
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        // 此时打印是在此组件里打印 实际使用应该在使用处打印
        // 此时需要将position 传出
        this.$emit("scroll", position);
      });
    }
    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }

    // console.log(this.scroll);
    // b-s 在决定有多少区域可以滚动时 是根据scollerHeight属性决定
    // scollerHeight属性是根据放b-s的content中的子组件的高度
    // 但首页 开始计算scollerHeight属性时 是没有将图片计算在内的
    // 所以计算出来的高度是错误的
    // 后来图片加载进来后有了新的高度 但scollerHeight属性并没有更新
    // 所以滚动出现了问题
    // *************解决方法?
    // 监听每一张图片是否加载完成 只要有一张图片加载完成了 执行一次refresh
    // img.onload = function(){}
    // this.scroll.refresh();
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // 判断 是否为 null true时 再执行下一步
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 创建一个refresh 函数 home中直接调用即可 否则需this.$refs.scroll.scroll.refresh()
    refresh() {
      console.log("***");
      this.scroll && this.scroll.refresh();
    },
    // getScrollY(){
    //   return this.scrollY ? this.scroll.y : 0
    // }
  },
};
</script>

<style>
</style>