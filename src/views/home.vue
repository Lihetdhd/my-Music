
<template>
  <el-container class="home">
    <el-header>
      <!-- <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          text-color="#b3bdb3"
          active-text-color="#e2e2da"
        >
          <el-menu-item :index="item.name" v-for=" (item,index) in list" :key="index">{{item.label}}</el-menu-item>
      </el-menu>-->
      <div class="header">
        <ul>
          <li v-for="(item,index) in nav" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 1,
      nav: [
        {
          name: "首页",
          index: "/"
        },
        {
          name: "Dom",
          index: "/Dom"
        }
      ],
      liWidth: 0
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    zuo() {
      let boxWidth = this.$refs.box.offsetWidth;
      let ulWidth = this.$refs.ul;
      let li = this.this.$refs.li;
      for (let i = 0; i < li.length; i++) {
        this.liWidth = li[i].offsetWidth + 12;

        if (this.liWidth > boxWidth) {
        }
      }
      console.log("boxWidth", boxWidth);
      console.log("ulWidth", ulWidth);
    },
    you() {}
  }
};
</script>

<style lang="less" scoped>
.home {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("../style/images/preview.jpg");
}
.header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  ul {
    height: 100%;
    li {
      line-height: 40px;
      display: inline-block;
      color: #fff;
      padding: 0 12px;
      cursor: pointer; //鼠标手势-手指
    }
  }
}
</style>
<style >
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>