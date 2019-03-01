<template>
  <div class="login">
    <div class="bg">
      <div class="login-box">
        <div class="title">
          <label>登录</label>
        </div>
        <div class="form">
          <el-form lable-width="80px">
            <el-form-item label="账号">
              <el-input class="input" v-model="userName" placeholder></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="userName" placeholder></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="go">
          <label>来吧！进入新的世界✧*｡٩(ˊᗜˋ*)و✧*｡</label>
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 0
    };
  }
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
  background: rgba(0, 0, 0, 0.3);
}
.login {
  .login-foxed();
  background: url("../../style/images/login.jpg") no-repeat;
  background-size: 100% 100%;
}
.login-box {
  color: #fff;
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
}
.go {
  text-align: center;
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
.input {
  color: #fff;
  background: rgba(0, 0, 0, 0) !important;
}
</style>
<style>
.el-input__inner {
  background: transparent;
}
</style>

