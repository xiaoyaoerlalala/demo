// 模拟后台数据:http://localhost:8080/#/simulation
<template>
    <div>模拟后台数据</div>
</template>

<script>
export default {
    data() {
        return {
            data: null
        }
    },
    methods: {
        getTest() {
            this.$http.get('test')
            .then((res) => {
                console.log('初始数据：');
                console.log(res.data.data);
                console.log('json字符串：')
                console.log(JSON.stringify(res.data.data))
                console.log('json对象：' )
                console.log(JSON.parse(JSON.stringify(res.data.data)))
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getTest()
    }
    
}
</script>

<style lang="less" scoped>

</style>


