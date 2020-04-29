<template>
  <div class="page-header header-zone">
    <div class="home-page-logo" @click="reloadPage">
      <img src="../../../assets/img/home/scroll-logo.png" alt="">
    </div>
    <ul class="title-label title-ul">
      <li v-for="(liItem, indexL) in dataArr" :key="indexL" :class="{'li-active': liItem.active}"
          class="li-item" @click="clickItem(indexL, liItem.selector)">{{liItem.name}}</li>
    </ul>
    <div class="action-button">
      <el-button size="mini" type="text" class="center-button" @click="loginStart" v-if="isLogin">商家中心</el-button>
      <el-button size="mini" class="scroll-button" @click="loginStart" v-else>登 录</el-button>
      <el-button size="mini" class="scroll-in" type="primary" @click="applyJoin">申请加入</el-button>
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
    background:rgba(255,255,255,0.98);
    box-shadow:0px 2px 10px 0px rgba(0,0,0,0.05);
    .title-label {
      li {
        color: #333333;
        &:hover {
           cursor: pointer;
           color: #FF6E25;
        }
      }
      .li-active {
        font-weight:600;
        padding-bottom: 4px;
        color:#FF6E25;
        &::after {
          content: '';
          display: block;
          margin: 7px auto;
          width: 24px;
          /*height: 0;*/
          border-bottom: 2px solid #FF6E25;
        }
      }
    }
    .center-button {
      font-size: 14px;
      font-family: PingFangSC-Regular,PingFang SC;
      color: #333333;
      margin-right: 22px;
      &:hover {
         color: #FF6E25;
      }
    }
    .scroll-button {
      height: 34px;
      width: 100px;
      color:rgba(255,110,37,1);
      border-radius:2px;
      border:1px solid rgba(255,110,37,1);
      background: transparent;
      font-family: PingFangSC-Regular,PingFang SC;
      &:hover {
         color:rgba(255,110,37,0.8);
         border:1px solid rgba(255,110,37,0.8);
      }
    }
    .scroll-in {
      height: 34px;
      width: 106px;
      border-radius:2px;
      font-family:PingFangSC-Semibold,PingFang SC;
    }
  }
</style>

