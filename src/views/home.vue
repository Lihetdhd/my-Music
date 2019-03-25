
<template>
  <el-container class="home">
    <el-header>
      <div class="header">
        <ul>
          <router-link
            tag="li"
            v-for="(item,index) in nav"
            :key="index"
            class="underline"
            :to="item.index"
          >
            <i :class="item.icon"></i>
            {{item.name}}
          </router-link>
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
          index: "/",
          icon: "fa fa-home"
        },
        {
          name: "Dom",
          index: "/Dom",
          icon: "fa fa-folder-o"
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
@import "../style/css/tool.less";
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
      padding: 0 20px;
      cursor: pointer; //鼠标手势-手指
    }
  }
}
.underline {
  position: relative;
  text-align: center;
  &:before {
    .background(rgba(255, 255, 255, 0.5));
  }
}
</style>
<style >
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>