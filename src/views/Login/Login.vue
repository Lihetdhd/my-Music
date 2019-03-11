<template>
  <div>
    <div class="login"></div>
    <div class="keep-auto">
      <star></star>
    </div>
    <div class="bg">
      <transition name="forms">
        <div class="login-box" v-show="formShow">
          <div class="title">
            <label>登录</label>
          </div>
          <div class="form">
            <el-form lable-width="80px">
              <el-form-item label="账号">
                <input type="text" v-model="userName" placeholder="请输入账号">
              </el-form-item>
              <el-form-item label="密码">
                <input type="password" v-model="userName" placeholder="请输入密码">
              </el-form-item>
            </el-form>
            <el-button class="go">
              <label>来吧！进入新的世界✧*｡٩(ˊᗜˋ*)و✧*｡</label>
            </el-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import star from "../../components/star";
export default {
  components: {
    star
  },
  data() {
    return {
      userName: "",
      password: "",
      formShow: false
    };
  },
  mounted() {
    this.formShow = true;
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.login-foxed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.bg {
  .login-foxed();
  z-index: 10;
}
.login {
  .login-foxed();
  background: url("../../style/images/login.jpg") no-repeat;
  background-size: 100% 100%;
}
@color: #fff;
.login-box {
  z-index: 10;
  color: @color;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  border-radius: 5px;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 90%;
  max-height: 345px;
  max-width: 440px;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
}
.go {
  height: 45px;
  background: #1f4474;
  text-align: center;
  margin-top: 8px;
  width: 100%;
  border: none;
  color: @color;
  position: relative;
}
.title {
  padding: 10px 0;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
.form {
  padding: 0 55px;
}
input {
  width: 100%;
  height: 35px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #aaa;
  color: @color;
  background: rgba(0, 0, 0, 0);
}

.forms-enter-active,
.forms-leave-active {
  transition: all 1s ease;
}

.forms-enter,
.forms-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.keep-auto {
  width: 100%;
  height: 50%;
  z-index: 9;
  position: fixed;
  top: 0;
  overflow: hidden;
}
.go:hover {
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
}
</style>
<style>
