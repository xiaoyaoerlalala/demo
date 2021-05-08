// vue-router相同路径跳转报错示例
<template>
    <div>
      <button v-on:click="jump">点击跳转到自身路径</button>
    </div>
</template>
<script>
export default {
  methods: {
    jump () {
      this.$router.push('/router')
    }
  }
}
</script>
<style lang="less" scoped>

</style>
