<template>
  <div>
    <div v-for="(item, index) in shop" :key="index" class="goods">
      <img :src="item.img" alt="" />
      <div class="content">
        <span>{{ item.title }}</span>
        <p>
          <b>{{ item.price }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  // components: CartGoodsList,
  data() {
    return {
      shop: [...this.$store.getters.list],
    };
  },
  created() {},
  mounted() {
    console.log("11", this.$store.getters.list);
    console.log("shop", this.shop);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.goods {
  width: 100%;
  height: 160px;
  background-color: pink;
  margin-bottom: 20px;
  .content {
    width: 100px;
    display: inline-block;
    vertical-align: top;
    span {
      // width: 100px;
      // height: 100px;
      font-size: 10px;
    }
  }
  img {
    width: 130px;
    height: 130px;
    margin: 15px;
  }
}
</style>