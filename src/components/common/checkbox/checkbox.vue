/**
 * 作者：yeshengqiang
 * 时间：2017-07-20
 * 描述：checkbox组件
 */
<style lang="scss" scoped>
    .hy-checkbox {
        position: relative;
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        vertical-align: middle;
        .hy-checkbox-inner {
            display: inline-block;
            position: relative;
            border: 1px solid #bfcbd9;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
        }
        .hy-checkbox-input {
            position: absolute;
            opacity: 0;
            outline: none;
            margin: 0;
            width: 0;
            height: 0;
            left: -999px;
        }
        &.is-checked {
            .hy-checkbox-inner {
                background-color: #20a0ff;
                border-color: #0190fe;
                &:after {
                    box-sizing: content-box;
                    content: "";
                    border: 2px solid #fff;
                    border-left: 0;
                    border-top: 0;
                    width: 3px;
                    height: 6px;
                    left: 4px;
                    position: absolute;
                    top: 1px;
                    transform: rotate(45deg) scaleY(1);
                    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
                    transform-origin: center;
                }
            }
        }
        &.is-indeterminate {
            .hy-checkbox-inner {
                background-color: #20a0ff;
                border-color: #0190fe;
                &:before {
                    content: "";
                    width: 8px;
                    height: 2px;
                    transform: scale(1);
                    background: #FFF;
                    position: absolute;
                    left: 2px;
                    top: 5px;
                }
            }
        }
    }
</style>
<template>
    <label :class="classes">
        <span :class="innerClasses"></span>
        <input type="checkbox" :class="inputClasses" :checked="currentValue" @change="handlerInput"/>
    </label>
</template>
<script>
    const prefixCls = 'hy-checkbox';

    export default {
        name: 'hyCheckbox',
        data () {
            return {
                currentValue: this.value,
                indeterminate: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        'is-checked': this.value,
                        'is-indeterminate': this.indeterminate && !this.value
                    }
                ];
            },
            innerClasses () {
                return [
                    `${prefixCls}-inner`
                ];
            },
            inputClasses () {
                return [
                    `${prefixCls}-input`
                ];
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handlerInput (event) {
                const checked = event.target.checked;
                this.currentValue = checked;
                this.$emit('input', checked);
            },
            updateModel () {
                this.currentValue = this.value;
            }
        },
        watch: {
            value: {
                immediate: true,
                handler: function () {
                    this.updateModel();
                }
            }
        }
    };
</script>