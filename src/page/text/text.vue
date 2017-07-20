/**
 * 作者：yeshengqiang
 * 时间：2017-07-20
 * 描述：测试页面
 */
<style lang="scss" scoped>
    @import 'src/styles/mixins';

    .content {
        @include wh(100%, 100%);
    }
</style>
<template>
    <div class="content">
        <i class="iconfont icon-shipin1"></i>
        <hy-icon type="shipin1" size="20" color="red"></hy-icon>
        <hy-checkbox v-model="check"></hy-checkbox>
        <!-- 分页 -->
        <hy-page v-show="pageShow"
            :current-page="searchData.pageNo"
            :page-size="searchData.pageSize"
            :total-element="totalElement" 
            @current-change="currentChange"></hy-page>
    </div>
</template>
<script>
    import list from '@/js/mixins/list';
    import hyCheckbox from '@/components/common/checkbox/checkbox';

    export default {
        data () {
            return {
                check: true
            };
        },
        mixins: [list],
        methods: {
            // 获取列表
            _getList () {
               // alert(1);
            }
        },
        components: {
            hyCheckbox
        }
    };
</script>