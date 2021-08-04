<template>
  <div class="navmenu">
    <a
      class="menu-item"
      v-for="item in urls"
      :key="item.url"
      @click="menuClick(item)"
      >{{ item.title }}</a
    >
  </div>
</template>

<script>
import Mock from "mockjs";
export default {
  name: "navmenu",
  data() {
    return {
      urls: [
        // { title: "详情", url: "detail" },
        // { title: "评价", url: "comment" },
        // { title: "推荐", url: "recommend" },
      ],
    };
  },
  mounted() {
    let mock = Mock.mock({
      "navs|10":[{
        "title":"@cword(2,6)",
        "url":"@natural"
      }]
    });
    this.urls = mock.navs
  },
  methods: {
    menuClick(item) {
      this.$emit("change", item.url);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.navmenu {
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 220px;
  .menu-item {
    padding: 20px;
    border: 1px #f0f0f0 solid;
    background-color: #f0f0f0;
    font-size: 30px;
    margin: 10px;
    color: #444;
    cursor: pointer;
    border-radius: 6px;

    &:hover {
      border: 1px #7598f8 solid;
      background-color: #7598f8;
      color: #fff;
    }
  }
}
</style>
