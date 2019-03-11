
<template>
  <el-container class="home">
    <el-header>
      <!-- <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#ccc"
      >
        <el-menu-item :index="item.name" v-for=" (item,index) in list" :key="index">{{item.label}}</el-menu-item>
      </el-menu>-->
    </el-header>
    <el-main>
      <div class="box" ref="box">
        <ul class="ul" ref="ul">
          <li class="li" style="width:60px" ref="li">1</li>
          <li class="li" style="width:80px" ref="li">2</li>
          <li class="li" style="width:70px" ref="li">3</li>
          <li class="li" style="width:66px" ref="li">4</li>
          <li class="li" style="width:40px" ref="li">5</li>
          <li class="li" style="width:80px" ref="li">6</li>
          <li class="li" style="width:24px" ref="li">7</li>
          <li class="li" style="width:78px" ref="li">8</li>
          <li class="li" style="width:53px" ref="li">9</li>
          <li class="li" style="width:87px" ref="li">10</li>
          <li class="li" style="width:53px" ref="li">11</li>
          <li class="li" style="width:45px" ref="li">12</li>
          <li class="li" style="width:65px" ref="li">13</li>
          <li class="li" style="width:47px" ref="li">14</li>
          <li class="li" style="width:54px" ref="li">15</li>
          <li class="li" style="width:52px" ref="li">16</li>
          <li class="li" style="width:77px" ref="li">17</li>
          <li class="li" style="width:89px" ref="li">18</li>
          <li class="li" style="width:45px" ref="li">19</li>
          <li class="li" style="width:75px" ref="li">20</li>
          <li class="li" style="width:89px" ref="li">21</li>
        </ul>
      </div>
      <el-button type @click="zuo">we</el-button>
      <el-button type @click="you">we</el-button>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      // activeIndex: 1,
      // list: [{ name: 1, label: "首页" }, { name: 2, label: "Dom" }]
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

<style scoped>
.home {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.box {
  width: 80%;
  margin: 0 auto;
  background: #ccc;
  height: 50px;
  overflow: hidden;
  position: relative;
}
.ul {
  height: 50px;
  white-space: nowrap;
  width: auto;
  display: inline-block;
  position: absolute;
}
.li {
  height: 100%;
  margin: 0 12px;
  background: red;
  display: inline-block;
}
</style>