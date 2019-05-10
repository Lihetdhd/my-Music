<template>
  <div>
    <div class="axis">
      <div class="img-1"></div>
      <div class="img-2"></div>
      <div class="img-3"></div>
      <div class="img-4"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@bg-imgSize: 100%; //背景图 自适应
//块级居中
.margin-auto {
  margin: 0 auto;
}

.axis {
  position: relative;
  width: 600px;
  height: 300px;
  background: url("../style/images/1.png") no-repeat;
  background-size: @bg-imgSize;
  .margin-auto();
  //animation: rotate linear 10s infinite;
  transform-style: preserve-3d;
  .transform(rotate3d(0, 1, 0, 0deg));

  .img-1 {
    .img-box(translateZ(150px), url("../style/images/2.png") no-repeat);
  }
  .img-2 {
    .img-box(translateZ(-150px), url("../style/images/3.png") no-repeat);
  }
  .img-3 {
    .img-box(
      rotateX(90deg) translateZ(150px),
      url("../style/images/4.png") no-repeat
    );
  }
  .img-4 {
    .img-box(
      rotateX(-90deg) translateZ(150px),
      url("../style/images/5.png") no-repeat
    );
  }
}
.img-box (@translate,@url) {
  width: 600px;
  height: 300px;
  position: absolute;
  background: @url;
  background-size: @bg-imgSize;
  transform: @translate;
}

@keyframes rotate {
  0% {
    .transform(rotate3d(1, 1, 1, 0deg));
  }
  100% {
    .transform(rotate3d(1, 1, 1, 360deg));
  }
}
//====================//方法

//3d 转换
.transform(@rotate3d) {
  transform: @rotate3d;
}
</style>
