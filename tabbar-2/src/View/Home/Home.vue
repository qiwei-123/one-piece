<template>
  <div id="Home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    /> -->
    <scroll
      class="content"
      ref="scroll"
      :prop-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <!-- @pullingUp="loadMore" -->

      <home-swiper :banners="banners" @swipeImageLoad="swipeImageLoad" />
      <recommend-view :recommends="recommends" />
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
import BackTop from "../../components/content/top/Top.vue";

import { getMultiData } from "../../../network/home";
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
        // console.log("home---this.banners", this.banners);
        this.recommends = res.data.recommend.list;
        console.log("222", this.recommends);
      });
    },
    getHomeGoods1(type) {
      // const page = this.goods[type].page + 1; //刚才这里没加this
      // getHomeGoods(type).then((res) => {
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
      const popList = [
        {
          show: {
            img: "https://img10.360buyimg.com/seckillcms/s500x500_jfs/t1/146021/17/23908/196019/6228455aE71e2f934/64984ad7accde68a.jpg",
          },
          title:
            "卧派 实木沙发客厅家具可拆洗小户型布艺沙发中式现代冬夏两用储物转角沙发组合 17 四人位+贵妃+茶几",
          price: "¥112",
        },
        {
          show: {
            img: "https://img12.360buyimg.com/n2/jfs/t1/203270/9/1853/519484/611c69c4Ea39e6150/7b805156b99ecbbb.jpg",
          },
          title:
            "卧派 电视柜 实木电视柜客厅家具现代中式简约伸缩电视机柜地柜709# 胡桃色 电视柜",
          price: "¥289",
        },
        {
          show: {
            img: "https://img11.360buyimg.com/n2/jfs/t1/203350/12/1852/598042/611c64b6Eb7a7cbf5/d308b0b7f5af3e1e.jpg",
          },
          title:
            "卧派 餐桌实木餐桌现代中式折叠餐桌伸缩饭桌家用方形圆形餐桌椅套装 实木 一桌六椅(903#餐椅*6)",
          price: "¥908",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n2/jfs/t1/127687/23/11845/535507/5f575416Eb7b6520b/ae1ad000e5efbe83.jpg",
          },
          title:
            "卧派 实木床现代中式双人床主卧室家具婚床精品家具 999 普通款 单床 1800*2000",
          price: "¥7655",
        },
        {
          show: {
            img: "https://img12.360buyimg.com/n7/jfs/t1/174017/28/27619/298936/62288253Edb0cc472/3aaa4b2935e881a7.jpg!q90",
          },
          title:
            "双虎家私 岩板电视柜茶几现代简约小户型地柜餐桌客餐厅组合套装家用212 20KT212茶几电视柜+20KT212一桌四椅",
          price: "¥3472",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n7/jfs/t1/135026/33/21225/171657/61dd3febE4aeed56c/fba548fab1f1ca91.jpg!q90",
          },
          title:
            "卧派 沙发实木冬夏两用现代中式沙发客厅简约布艺小户型带储物组合套装家具 27储物 1+2+3 沙发",
          price: "¥2334",
        },
        {
          show: {
            img: "https://img10.360buyimg.com/n6/jfs/t1/193066/12/17293/199047/6110e71eE3276f586/6e2182073eb793e0.jpg",
          },
          title:
            "摩天 餐桌 大理石餐桌实木餐桌意式新中式餐桌椅组合餐厅家具 餐桌[大理石] 1.4M",
          price: "¥1850",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n6/jfs/t25042/247/2226036716/143998/502af9ef/5bc70a6aNae9a5c77.jpg",
          },
          title:
            "摩天 餐桌 北欧餐桌折叠伸缩餐桌椅组合餐厅家具 1桌4椅[大理石] 1.4M",
          price: "¥2490",
        },
      ];
      const newList = [
        {
          show: {
            img: "https://img10.360buyimg.com/babel/s320x320_jfs/t1/136233/15/23861/137919/622770dbE6b3af1e2/fcfddcfa6d8672ab.jpg!cc_320x320.webp",
          },
          title:
            "11 实木沙发客厅家具可拆洗小户型布艺沙发中式现代冬夏两用储物转角沙发组合 17 四人位+贵妃+茶几",
          price: "¥112",
        },
        {
          show: {
            img: "https://img12.360buyimg.com/n2/jfs/t1/203270/9/1853/519484/611c69c4Ea39e6150/7b805156b99ecbbb.jpg",
          },
          title:
            "卧派 电视柜 实木电视柜客厅家具现代中式简约伸缩电视机柜地柜709# 胡桃色 电视柜",
          price: "¥289",
        },
        {
          show: {
            img: "https://img11.360buyimg.com/n2/jfs/t1/203350/12/1852/598042/611c64b6Eb7a7cbf5/d308b0b7f5af3e1e.jpg",
          },
          title:
            "卧派 餐桌实木餐桌现代中式折叠餐桌伸缩饭桌家用方形圆形餐桌椅套装 实木 一桌六椅(903#餐椅*6)",
          price: "¥908",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n2/jfs/t1/127687/23/11845/535507/5f575416Eb7b6520b/ae1ad000e5efbe83.jpg",
          },
          title:
            "卧派 实木床现代中式双人床主卧室家具婚床精品家具 999 普通款 单床 1800*2000",
          price: "¥7655",
        },
        {
          show: {
            img: "https://img12.360buyimg.com/n7/jfs/t1/174017/28/27619/298936/62288253Edb0cc472/3aaa4b2935e881a7.jpg!q90",
          },
          title:
            "双虎家私 岩板电视柜茶几现代简约小户型地柜餐桌客餐厅组合套装家用212 20KT212茶几电视柜+20KT212一桌四椅",
          price: "¥3472",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n7/jfs/t1/135026/33/21225/171657/61dd3febE4aeed56c/fba548fab1f1ca91.jpg!q90",
          },
          title:
            "卧派 沙发实木冬夏两用现代中式沙发客厅简约布艺小户型带储物组合套装家具 27储物 1+2+3 沙发",
          price: "¥2334",
        },
        {
          show: {
            img: "https://img10.360buyimg.com/n6/jfs/t1/193066/12/17293/199047/6110e71eE3276f586/6e2182073eb793e0.jpg",
          },
          title:
            "摩天 餐桌 大理石餐桌实木餐桌意式新中式餐桌椅组合餐厅家具 餐桌[大理石] 1.4M",
          price: "¥1850",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n6/jfs/t25042/247/2226036716/143998/502af9ef/5bc70a6aNae9a5c77.jpg",
          },
          title:
            "摩天 餐桌 北欧餐桌折叠伸缩餐桌椅组合餐厅家具 1桌4椅[大理石] 1.4M",
          price: "¥2490",
        },
      ];
      const sellList = [
        {
          show: {
            img: "https://img10.360buyimg.com/babel/s320x320_jfs/t1/136233/15/23861/137919/622770dbE6b3af1e2/fcfddcfa6d8672ab.jpg!cc_320x320.webp",
          },
          title:
            "12222 实木沙发客厅家具可拆洗小户型布艺沙发中式现代冬夏两用储物转角沙发组合 17 四人位+贵妃+茶几",
          price: "¥112",
        },
        {
          show: {
            img: "https://img12.360buyimg.com/n2/jfs/t1/203270/9/1853/519484/611c69c4Ea39e6150/7b805156b99ecbbb.jpg",
          },
          title:
            "卧派 电视柜 实木电视柜客厅家具现代中式简约伸缩电视机柜地柜709# 胡桃色 电视柜",
          price: "¥289",
        },
        {
          show: {
            img: "https://img11.360buyimg.com/n2/jfs/t1/203350/12/1852/598042/611c64b6Eb7a7cbf5/d308b0b7f5af3e1e.jpg",
          },
          title:
            "卧派 餐桌实木餐桌现代中式折叠餐桌伸缩饭桌家用方形圆形餐桌椅套装 实木 一桌六椅(903#餐椅*6)",
          price: "¥908",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n2/jfs/t1/127687/23/11845/535507/5f575416Eb7b6520b/ae1ad000e5efbe83.jpg",
          },
          title:
            "卧派 实木床现代中式双人床主卧室家具婚床精品家具 999 普通款 单床 1800*2000",
          price: "¥7655",
        },
        {
          show: {
            img: "https://img12.360buyimg.com/n7/jfs/t1/174017/28/27619/298936/62288253Edb0cc472/3aaa4b2935e881a7.jpg!q90",
          },
          title:
            "双虎家私 岩板电视柜茶几现代简约小户型地柜餐桌客餐厅组合套装家用212 20KT212茶几电视柜+20KT212一桌四椅",
          price: "¥3472",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n7/jfs/t1/135026/33/21225/171657/61dd3febE4aeed56c/fba548fab1f1ca91.jpg!q90",
          },
          title:
            "卧派 沙发实木冬夏两用现代中式沙发客厅简约布艺小户型带储物组合套装家具 27储物 1+2+3 沙发",
          price: "¥2334",
        },
        {
          show: {
            img: "https://img10.360buyimg.com/n6/jfs/t1/193066/12/17293/199047/6110e71eE3276f586/6e2182073eb793e0.jpg",
          },
          title:
            "摩天 餐桌 大理石餐桌实木餐桌意式新中式餐桌椅组合餐厅家具 餐桌[大理石] 1.4M",
          price: "¥1850",
        },
        {
          show: {
            img: "https://img14.360buyimg.com/n6/jfs/t25042/247/2226036716/143998/502af9ef/5bc70a6aNae9a5c77.jpg",
          },
          title:
            "摩天 餐桌 北欧餐桌折叠伸缩餐桌椅组合餐厅家具 1桌4椅[大理石] 1.4M",
          price: "¥2490",
        },
      ];
      // 接口未返回数据
      switch (type) {
        case "pop":
          this.goods[type].list.push(...popList);
          break;
        case "new":
          this.goods[type].list.push(...newList);
          break;
        case "sell":
          this.goods[type].list.push(...sellList);
          break;
      }
      // this.goods[type].page += 1;

      // this.$refs.scroll.finishPullUp();
      // });
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
      // this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      console.log("回到顶部");
      this.$refs.scroll.scrollTo(0, 0, 300);
      // this.scroll.scrollTo(0, 0, 300)
      // console.log(this.$refs.scroll.message);
    },
    contentScroll(postion) {
      // this.isJudge = (-position.y) > 1000;
      // 1.判断backtop 是否显示
      this.$refs.backTop = Math.abs(postion.y) > 1000;

      // 2.决定tabControl是否吸顶(positon: fixed)
    },
    // loadMore() {
    //   this.getHomeGoods(this.currentType);
    // },
    swipeImageLoad() {
      console.log(this.$refs.tabControl.$el.offsetTop);
      // console.log("33", this.$refs.tabControl2.$el.offsetTop);
      // this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log("22", this.tabOffsetTop);
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