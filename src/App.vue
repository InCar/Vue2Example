/**
 * 作者：yeshengqiang
 * 时间：2017-07-20
 * 描述：app.vue
 */
<style lang="scss">
    @import 'src/styles/common';

    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
<template>
    <transition name="router-fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>