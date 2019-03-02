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

        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 0,
      password: ""
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
@color: #fff;
.login-box {
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
</style>
<style>
