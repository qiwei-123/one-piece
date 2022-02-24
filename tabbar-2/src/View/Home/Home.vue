<template>
  <div id="Home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :prop-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swipeImageLoad="swipeImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 组件无法监听事件 但.native 可以监听组件根元素的原生事件 -->
    <!-- 若令div可以点击 必须设置 click: true -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childSwiper/HomeSwiper.vue";
import RecommendView from "./childSwiper/RecommendView.vue";
import FeatureView from "./childSwiper/FeatureView.vue";

import NavBar from "../../components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/Goods/GoodsList.vue";
// import GoodsListItem from "../../components/content/Goods/GoodsListItem.vue";
import BackTop from "../../components/content/top/Top.vue";

import { getMultiData, getHomeGoods } from "../../../network/home";
// 导入 debounce 防抖函数
import { debounce } from "../../components/common/utils";

import Scroll from "../../components/common/Scroll.vue";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    Scroll,
  },
  data() {
    // return {
    //   result: null
    // }
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: true,
      tabOffsetTop: 545,
      isTabFixed: false,
    };
  },
  created() {
    // 请求多个数据
    this.getMultiData1();
    // 请求商品数据
    this.getHomeGoods1("pop");
    this.getHomeGoods1("new");
    this.getHomeGoods1("sell");
  },
  mounted() {
    // 1.图片加载完成的事件监听
    // 上方导入 debounce 后 此处不再使用this.debounce
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // 2.赋值
    this.tabOffsetTop = this.$refs.tabControl;

    // 监听item 中图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    // 网络请求相关方法
    getMultiData1() {
      getMultiData().then((res) => {
        // console.log(res);
        // this.result = res;
        // 65行 给this.banners赋值但子组件home-swiper的props-banners未更新（原因：未触发响应式 所以不会更新子组件，数组和对象变量的更新不是简单的赋值 而是采用一些api或者用this.$set）
        // 我使用的是数组的api arr.push() 这个方法会触发vue的响应式 从而更新了传入子组件的数组banners
        // this.banners = res.data.banner.list;
        this.banners.push(...res.data.banner.list);
        console.log("home---this.banners", this.banners);
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods1(type) {
      const page = this.goods[type].page + 1; //刚才这里没加this
      getHomeGoods(type, page).then((res) => {
        // 笨比方法 将数据动态传入 遍历
        // let nums1 = [];
        // let nums2 = [10, 20, 30];
        // for(let i of nums2){
        //   nums1.push(n)
        // }
        // 高级传入
        // nums1.push(...nums2)
        // console.log(this.goods);
        // console.log('------', this);
        // console.log("data", res.data);
        const jk = [
          {
            title: "title1",
          },
          {
            title: "title2",
          },
          {
            title: "title3",
          },
          {
            title: "title4",
          },
                    {
            title: "title5",
          },
          {
            title: "title6",
          },
          {
            title: "title7",
          },
          {
            title: "title8",
          },
          {
            title: "title9",
          },
          {
            title: "title10",
          },
          {
            title: "title11",
          },
          {
            title: "title12",
          },

        ];
        // 接口未返回数据
        console.log('res = '+res);
        this.goods[type].list.push(...jk);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
    // 事件监听方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        // 每一种情况都加break 提高运行效率
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$ref.scroll.scrollTo();
    },
    contentScroll(postion) {
      // this.isJudge = (-position.y) > 1000;
      // 1.判断backtop 是否显示
      this.$refs.backTop = Math.abs(postion.y) > 1000;

      // 2.决定tabControl是否吸顶(positon: fixed)
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swipeImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 上拉加载更多
    // loadMore() {
    //   this.getHomeGoods1(this.currentType);

    //   this.$refs.scroll.scroll.refresh()
    // },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    // activated() {
    //   this.$refs.scroll.scrollTo(0, this.saveY, 0);
    //   this.$refs.scroll.refresh()
    // },
    // deactivated() {
    //   this.saveY = this.$$refs.scroll.getScrollY()
    // },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* 100%视口高度 */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 在使用浏览器原生滚动时 为了让导航不跟随一起滚动 */
  /* position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 9; */
}
/* 简单实现TabControl 悬浮 */
/* .ez-css {
  position: sticky;
  top: 44px;
} */
/* content 以及 tab-control 样式添加后出现塌陷问题 此样式用于将 流行新款 吸顶(糊弄用户的解决方案) */
/* .content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0px;
  right: 0px;
  bottom: 49px;
} */
/* .tab-control {
  position: relative;
  z-index: 9;
} */
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>