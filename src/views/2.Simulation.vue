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
                console.log(res)
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


