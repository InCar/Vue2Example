<template>
  <transition name="router-fade" mode="out-in">
      <router-view></router-view>
  </transition>
</template>
<style lang="scss">
  /*导入公共部分*/  
  // 没有scoped 则可以全局应用
  @import 'common/style/reset.css';           // 导入重置

  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
</style>