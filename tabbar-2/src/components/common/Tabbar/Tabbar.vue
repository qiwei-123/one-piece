<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
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
