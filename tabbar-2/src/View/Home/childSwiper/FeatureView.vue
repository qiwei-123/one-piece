<template>
  <div class="feature">
    <nav-bar class="home-nav"><div slot="center">分类</div></nav-bar>
    <ul id="img_top">
      <li v-for="(item, index) in imgArr" :key="index" @click="liClick(index)">
        <img :src="item" alt="" />
      </li>
    </ul>
    <goods-list :goods="goodsList" />
  </div>
</template>

<script>
import GoodsList from "../../../components/content/Goods/GoodsList.vue";
import NavBar from "../../../components/common/navbar/NavBar.vue";

export default {
  name: "FeatureView",
  components: {
    NavBar,
    GoodsList,
  },
  data() {
    return {
      goodsList: [],
      currentIndex: 0,
      imgArr: [
        require("./img/man.png"),
        require("./img/woman.png"),
        require("./img/beauty.png"),
        require("./img/electrical.png"),
        require("./img/food.png"),
        require("./img/mom.png"),
      ],
    };
  },
  created() {
    this.liClick(0);
    // this.goodsList = man;
  },
  methods: {
    liClick(index) {
      const man = [
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
      switch (index) {
        case 0:
          this.goodsList = man;
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100px;
  height: 110px;
  padding: 3px;
}
#img_top {
  :nth-child(1) {
    float: left;
  }
  ::after {
    content: "";
    clear: both;
  }
  margin: 10px 0;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>