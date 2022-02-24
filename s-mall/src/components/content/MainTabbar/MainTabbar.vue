<template>
  <tab-bar>
    <TabbarItem path="/home" activeColor="red">
      <template v-slot:item-icon>
        <span class="iconfont icon-shouye spf" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/assets/img/shouye-active.png" alt="" class="spf2" /></span>
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="red">
      <template v-slot:item-icon>
        <span class="iconfont icon-fenlei spf" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/assets/img/fenlei-active.png" alt="" class="spf2" /></span>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabbarItem>
    <TabbarItem path="/cart" activeColor="red">
      <template v-slot:item-icon>
        <span class="iconfont icon-gouwuche1 spf" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/assets/img/shopcart-active.png" alt="" class="spf2" /></span>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabbarItem>
    <TabbarItem path="/profile" activeColor="red">
      <template v-slot:item-icon>
        <span class="iconfont icon-wode spf" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <span><img src="@/assets/img/wode-active.png" alt="" class="spf2" /></span>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabbarItem>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/Tabbar/Tabbar.vue";
import TabbarItem from "../../common/TabbarItem/TabbarItem.vue";

export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabbarItem,
  },
};
</script>

<style lang="scss">
</style>