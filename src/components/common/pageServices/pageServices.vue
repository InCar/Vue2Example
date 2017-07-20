/**
 *  作者：yeshengqiang
 *	时间：2017-06-12
 *	描述：分页组件
 */
 <template>
    <div class="padding">
        <ul class="pagination">
            <li class="first" :class="{'disabled': internalCurrentPage == 1}">
                <a href="javascript:void(0)" @click="go(1)">首页</a>
            </li>
            <li
                v-show="hasPrevious">
                <a href="javascript:void(0)" @click="prev()"><<</a>
            </li>
            <li :class="{'active': internalCurrentPage == i}"
                v-for="(i, index) in pages" :key="index">
                <a href="javascript:void(0)" @click="go(i)">{{i}}</a>
            </li>
            <li v-show="hasNextVar">
                <a href="javascript:void(0)" @click="next()">>></a>
            </li>
            <li class="end" :class="{'disabled': internalCurrentPage == totalPage}">
                <a href="javascript:void(0)" @click="go(totalPage)">尾页</a>
            </li>
            <li class="end disabled">
                <a href="javascript:void(0)">共{{totalElement}}条</a>
            </li>
        </ul>
    </div>
 </template>
 <script>
    export default {
        name: 'hyPage',
        data () {
            return {
                internalCurrentPage: 1
            };
        },
        props: {
            // 当前页
            currentPage: {
                type: Number,
                default: 1
            },
            // 展示多少
            showItem: {
                type: Number,
                default: 5
            },
            pageSize: {
                type: Number,
                default: 10
            },
            totalElement: {
                type: Number,
                default: 0
            }
        },
        computed: {
            totalPage: function () {
                return Math.ceil(this.totalElement / this.pageSize);
            },
            pages: function () {
                let pages = [];
                if (this.internalCurrentPage < this.showItem) {
                    let i = Math.min(this.showItem, this.totalPage);
                    while (i) {
                        pages.unshift(i--);
                    }
                } else {
                    let middle = this.internalCurrentPage - Math.floor(this.showItem / 2);
                    let i = this.showItem;
                    let calc = this.totalPage - this.showItem;
                    if (middle > calc) {
                        middle = calc + 1;
                    }
                    while (i--) {
                        pages.push(middle++);
                    }
                }
                return pages;
            },
            hasPrevious: function () {
                return this.internalCurrentPage > 1;
            },
            hasNextVar: function () {
                return this.internalCurrentPage < this.totalPage;
            }
        },
        methods: {
            next () {
                if (this.hasNextVar) {
                    this.internalCurrentPage++;
                    this.load();
                }
            },
            go (currentPage) {
                if (this.internalCurrentPage === currentPage) return;
                this.internalCurrentPage = currentPage;
                this.load();
            },
            prev () {
                if (this.hasPrevious) {
                    this.internalCurrentPage--;
                    this.load();
                }
            },
            load () {
                this.$emit('current-change', this.internalCurrentPage);
            }
        },
        watch: {
            'currentPage': {
                immediate: true,
                handler (val) {
                    this.internalCurrentPage = val;
                }
            }
        }
    };
 </script>
 <style lang="scss" scoped>
    @import 'src/styles/vars';
    .padding {
        padding: 15px;
        text-align: right;
        .pagination {
            display: inline-block;
            user-select: none;
            li {
                border: 1px solid #EEEEEE;
                border-radius: 100%;
                background: #EEEEEE;
                float: left;
                margin:0 5px;
                a {
                    display: block;
                    text-align: center;
                    width: 32px;
                    height: 32px;
                    line-height: 32px;
                    // padding: 6px 12px;
                    border-radius: 100%;
                    color: #97A1AC;
                    cursor: pointer;
                }
                &:hover,
                &.active {
                    border-color: #5FADE3;
                    background: #5FADE3;
                    a {
                        color: #FFF;
                        i {
                            color: #FFF;
                        }
                    }
                }
                &.first,
                &.end {
                    border-radius: 16px;
                    border-color: #5FADE3;
                    background: #5FADE3;
                    a {
                        color: #FFFFFF;
                        width: auto;
                        height: auto;
                        line-height: 1.5;
                        padding: 7px 14px;
                    }
                }
                &.disabled,
                &.disabled:hover {
                    background: #EEEEEE;
                    border-color: #EEEEEE;
                    a {
                        cursor: not-allowed;
                        color: #97a1ac;
                    }
                }
                &:active,
                &:focus,
                &:visited {
                    background: rgb(86, 157, 204);
                    border-color: rgb(86, 157, 204);
                    color: #fff;
                }
            }
        }
    }
    .icon-pre {
        position: relative;
        left: -1px;
        color: #97A1AC;
    }
    .icon-next {
        position: relative;
        left: 1px;
        color: #97A1AC;
    }
 </style>
 