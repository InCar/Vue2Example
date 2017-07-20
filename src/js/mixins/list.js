/**
 *  作者：yeshengqiang
 *  时间：2017-06-04
 *  描述：混合类
 */

export default {
    data () {
        return {
            list: [],                                           // 列表展示
            searchData: {                                       // 搜索条件
                pageNo: this.$store.state.pageNo,               // 当前页码
                pageSize: this.$store.state.pageSize            // 分页大小
            },
            totalElement: this.$store.state.totalElement        // 总数量
        };
    },
    computed: {
        // 分页是否展示
        pageShow () {
            return true;
        }
    },
    created () {
        this.currentChange(1);
    },
    methods: {
        currentChange (val) {
            this.loading = true;
            this.searchData.pageNo = val;
            // 获取列表
            this._getList();
        },
        // 格式化数据
        callback (res) {
            this.totalElement = res.totalElements;
            this.list = res.list;
        },
        search () {
            this.currentChange(1);
        }
    }
};