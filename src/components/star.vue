<template>
  <canvas ref="canvas" :style="{height: screenHeight+'px'}"></canvas>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: window.innerHeight // 屏幕高度
    };
  },
  mounted() {
    let _this = this;
    //监听窗口大小
    window.onresize = function() {
      _this.screenHeight = document.documentElement.clientHeight; // 窗口高度
    };
    let canvas = this.$refs.canvas;
    let ctx = canvas.getContext("2d"); //创建context对象
    let width = (canvas.width = window.innerWidth); //窗口大小 = 画布大小
    let height = (canvas.height = window.innerHeight); //窗口大小 = 画布大小
    let hue = 217;
    let stars = []; //星星数量
    let count = 0;
    let maxStars = 1300; //最大星星数量

    //创建星星
    let canvas2 = document.createElement("canvas"); //创建一个画布
    let ctx2 = canvas2.getContext("2d");
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2;
    let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half); //创建一个渐变
    gradient2.addColorStop(0.025, "#ccc"); //渐变的颜色，和位置
    gradient2.addColorStop(0.1, "hsl(" + hue + ",61%,33%)");
    gradient2.addColorStop(0.25, "hsl(" + hue + ",64%,6%)");
    gradient2.addColorStop(1, "transparent");
    ctx2.fillStyle = gradient2; //把颜色填充到画布
    ctx2.beginPath(); //线条
    ctx2.arc(half, half, half, 0, Math.PI * 2); //创建一个圆
    ctx2.fill(); //填充

    //星星闪烁变化的值
    function random(min, max) {
      //判断传入多少参数
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }
      if (min > max) {
        let hold = max;
        max = min;
        min = hold;
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      let max = Math.max(x, y); //返回x或y,其中的最大值
      let diameter = Math.round(Math.sqrt(max * max + max * max)); //sqrt 取平方根 round()随机数
      return diameter / 2;
      // 星星移动范围，值越大范围越小
    }

    let Star = function() {
      this.orbitRadius = random(maxOrbit(w, h)); //星星的轨道
    };
  }
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: auto /*默认全屏显示 可自己设置高度640px*/;
  display: inline-block;
  vertical-align: baseline;
  position: absolute;
  z-index: -1;
}
</style>