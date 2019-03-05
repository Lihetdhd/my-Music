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

    //创建星星;
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
    ctx2.arc(half, half, 20, 0, Math.PI * 2); //创建一个圆
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
      return diameter / 3;
      // 星星移动范围，值越大范围越小
    }

    let Star = function() {
      this.orbitRadius = random(maxOrbit(width, height)); //星星的轨道
      this.radius = random(60, this.orbitRadius) / 8;
      //星星的大小
      this.orbitX = width / 2;
      this.orbitY = height / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 70000;
      // 星星移动速度,,
      this.alpha = random(2, 10) / 10;

      count++;
      stars[count] = this;
    };
    Star.prototype.draw = function() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
      var y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
      var twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(
        canvas2,
        x - this.radius / 2,
        y - this.radius / 2,
        this.radius,
        this.radius
      );
      this.timePassed += this.speed;
    };

    for (var i = 0; i < maxStars; i++) {
      /* eslint-disable no-new */
      new Star();
    }

    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.4; // 尾巴
      ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 2)"; //背景颜色
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    }
    animation();
  },
  methods: {
    addClass(val) {
      document.getElementById(val).style.color = "black";
      // document.getElementById('register').style.color = 'black'
    },
    deleteClass(val) {
      document.getElementById(val).style.color = "";
    }
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
  z-index: 1;
  opacity: 0.5;
}
</style>