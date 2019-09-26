<template>
  <div class="login flex-column">
    <div class="login-header">
      <span>肖之笑</span>
    </div>
    <div class="login-main flex-1">
      <div class="login-form-wrap">
        <h2 class="login-form-header">用户登录</h2>
        <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="40px">
          <el-form-item label="账号" prop="pass">
            <el-input type="password" v-model="loginForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <div>
            <el-button type="primary" class="login-form-submit" @click="userLogin('loginForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { requestLogin } from './api/login';
  import { setLoginUser, getTokenCookie } from '@/assets/js/userLogin';

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          account: '',
          password: ''
        },
        loginRules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      userLogin(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            requestLogin(this.loginForm).then(data => {
              setLoginUser(data.result)
              let toPage = this.$route.query.toPage
              if (toPage && toPage !== '/' && toPage !== '/noauth') {
                this.$router.push(toPage)
              } else {
                this.$router.push('/head-menu')
              }
            }).catch(this.$handleError)
          }
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  .login{
    height: 100%;
    width: 100%;
    .login-header {
      height: 56px;
      line-height: 56px;
      padding-left: 20px;
      color: white;
      font-size: 28px;
      font-weight: bold;
      background-color: rgba(78, 92, 123, 1.0);
    }
    .login-main{
      background: url('../../assets/img/login_bg.png') no-repeat;
      background-size: cover;
      position: relative;
    }
    .login-form-wrap{
      position: absolute;
      top: 80px;
      right: 86px;
      width: 400px;
      padding: 40px 50px;
      background:rgba(255,255,255,1);
      border-radius:8px;
      .login-form-header {
        font-size:22px;
        line-height: 30px;
        text-align: center;
        font-weight:600;
        color: #333;
      }
      .login-form-submit{
        width: 100%;
        height: 50px;
        font-size:16px;
        font-weight:600;
      }
    }
  }
</style>
