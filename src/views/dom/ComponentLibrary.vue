<template>
  <!--dom合集  -->
  <div class="dom-box">
    <swiper></swiper>
  </div>
</template>
<script>
import swiper from "../../components/swiper3D";
export default {
  data() {
    return {};
  },
  components: {
    swiper
  }
};
</script>
<style lang="less" scoped>
.dom-box {
  width: 85%;
  margin: 50px auto;
  padding: 30px;
  border-radius: 8px;
  background: rgba(204, 204, 204, 0.5);
}
</style>
