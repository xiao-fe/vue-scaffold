<template>
  <div class="page-header header-zone">
    <div class="home-page-logo" @click="reloadPage">
      <img src="../../../assets/img/logo.png" alt="">
    </div>
    <ul class="title-label title-ul">
      <li v-for="(liItem, indexL) in dataArr" :key="indexL" class="li-item"
          @click="clickItem(indexL, liItem.selector)">{{liItem.name}}</li>
    </ul>
    <div class="action-button">
      <el-button size="mini" type="text" class="center-button" @click="loginStart" v-if="isLogin">商家中心</el-button>
      <el-button size="mini" class="login-button" @click="loginStart" v-else>登 录</el-button>
      <el-button size="mini" class="apply-in" @click="applyJoin">申请加入</el-button>
    </div>
  </div>
</template>

<script>
  import homePage from '../../../mixins/home-page';

  export default {
    mixins: [homePage],
    props: {
      dataArr: {
        type: Array,
        default: function () {
          return [];
        }
      },
      isLogin: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .page-header {
    .title-label {
      height: 32px;
      display: flex;
      margin-top: 20px;
      flex: 1;
      li {
        color: rgba(255,255,255,0.8);
        &:hover {
           cursor: pointer;
           font-weight: 600;
           color: rgba(255,255,255,1);
        }
      }
    }
    .center-button {
      font-size: 14px;
      font-family: PingFangSC-Regular,PingFang SC;
      color: rgba(255,255,255,0.8);
      margin-right: 22px;
      &:hover {
         font-weight: 600;
         color: rgba(255,255,255,1);
      }
    }
    .login-button {
      height: 34px;
      width: 100px;
      color: #fff;
      border-radius:2px;
      /*background: transparent;*/
      font-family: PingFangSC-Regular,PingFang SC;
      background:rgba(255,255,255,0.08);
      border-radius:2px;
      border:1px solid rgba(229,234,242,1);
      &:hover {
         color:rgba(255,255,255,0.8);
         border:1px solid rgba(255,255,255,0.8);
      }
    }
    .apply-in {
      height: 34px;
      width: 106px;
      color: #333333;
      font-size:12px;
      border-color: #fff;
      font-family:PingFangSC-Semibold,PingFang SC;
      background:rgba(255,255,255,1);
      border-radius:2px;
      &:hover {
         background:rgba(255,255,255,0.9);
         border:rgba(255,255,255,0.9);
      }
    }
  }
</style>
