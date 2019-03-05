
<template>
  <el-container class="home">
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#ccc"
      >
        <el-menu-item :index="item.name" v-for=" (item,index) in list" :key="index">{{item.label}}</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 1,
      list: [{ name: 1, label: "首页" }, { name: 2, label: "Dom" }]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.home {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url();
}
</style>