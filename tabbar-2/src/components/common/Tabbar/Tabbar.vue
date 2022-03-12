<template>
  <div id="tab-bar">
    <TabbarItem path="/home" activeColor="red">
      <template v-slot:item-icon>
        <!-- <span class="iconfont icon-shouye spf" alt="" /> -->
        <span><img src="@/img/shouye.png" alt="" class="spf" /></span>
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/img/shouye-active.png" alt="" class="spf2" /> </span>
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="red">
      <template v-slot:item-icon>
        <!-- <span class="iconfont icon-fenlei spf" alt="" /> -->
        <span><img src="@/img/fenlei.png" alt="" class="spf" /></span>
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/img/fenlei-active.png" alt="" class="spf2" /></span>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabbarItem>
    <TabbarItem path="/cart" activeColor="red">
      <template v-slot:item-icon>
        <!-- <span class="iconfont icon-gouwuche1 spf" alt="" /> -->
        <span><img src="@/img/shopcart.png" alt="" class="spf" /></span>
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/img/shopcart-active.png" alt="" class="spf2" /></span>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabbarItem>
    <TabbarItem path="/profile" activeColor="red">
      <template v-slot:item-icon>
        <!-- <span class="iconfont icon-wode spf" alt="" /> -->
        <span><img src="@/img/wode.png" alt="" class="spf" /></span>
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/img/wode-active.png" alt="" class="spf2" /></span>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabbarItem>
  </div>
</template>

<script>
import TabbarItem from "../../common/TabbarItem/TabbarItem.vue";

export default {
  name: "Tabbar",
  components: {
    TabbarItem,
  },
};
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  /* 为其设置背景颜色 */
  background-color: #f6f6f6;
  /* tabbar在底部显示 */
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  /* 设置tabbar过渡阴影 */
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.2);
}
</style>