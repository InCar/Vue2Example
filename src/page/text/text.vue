<template>
    <div>
        {{msg}}
        <br />
        {{date | formatDate}}
    </div>
</template>
<script>
    import { getText } from '@/service/textService';

    export default {
        data () {
            return {
                date: +new Date(),
                msg: 'text'
            };
        },
        created () {
            getText(null, null, res => {
                console.log(res);
            }, ret => {
                console.log(ret);
            });
        }
    };
</script>