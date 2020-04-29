<template>
  <div class="header-content">
    <div class="title">
      <span>用工牛</span>
      <span>企业一站式用工新体验</span>
    </div>
    <div class="tip">专注为蓝领企业提供用工全场景解决方案</div>
    <div><el-button type="primary" @click="advisory" class="advisory-button">即刻咨询</el-button></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      advisory() {
        this.$emit('apply');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-content {
    padding-top: 190px;
    text-align: center;
    .title {
      width: 700px;
      margin: 0 auto;
      position: relative;
      font-size:40px;
      font-family:PingFangSC-Semibold,PingFang SC;
      font-weight:600;
      color:rgba(255,255,255,1);
      span:first-child {
        display: inline-block;
        padding-right: 40px;
        &::after {
           content: '';
           display: block;
           position: absolute;
           top: 16px;
           left: 210px;
           height: 32px;
           width: 0;
           border: 1px solid rgba(255,255,255,0.6);
        }
      }
    }
    .tip {
      font-size:24px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(255,255,255,1);
      padding: 14px 0 64px 0;
    }
    .advisory-button {
      width: 160px;
      height: 46px;
      font-size:16px;
      font-weight:600;
      border-radius: 2px;
    }
  }
</style>
