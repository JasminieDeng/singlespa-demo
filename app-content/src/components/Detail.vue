<template>
  <div class="page">
    <h2>{{content.name}}</h2>
    <div>{{content.con}}</div>
  </div>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: "detail",
  data() {
    return {
      content: {}
    }
  },
  mounted() {},
  watch:{
    $route(){
      console.log(this.$route.params)
      this.content = Mock.mock({
        name:"@name",
        con:"@sentence(100,1000)"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  font-size: 60px;
}
</style>
