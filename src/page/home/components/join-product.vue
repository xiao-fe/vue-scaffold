<template>
  <div class="product-join">
    <span class="join-text">点击立即开通用工牛</span>
    <el-button type="primary" class="apply-join" @click="advisory">申请加入</el-button>
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
  .product-join {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    line-height: 120px;
    background: url("../../../assets/img/home/contact-product.png") no-repeat;
    background-size: cover;
    background-position: 50%;
    .join-text {
      display: inline-block;
      padding-right: 32px;
      font-size:30px;
      font-family:PingFangSC-Semibold,PingFang SC;
      font-weight:600;
      color:rgba(255,255,255,1);
    }
    .apply-join {
      width:160px;
      height:46px;
      color: #FF6E25;
      font-size:16px;
      font-weight:600;
      border-radius: 2px;
      background-color: #FFFFFF;
      border-color: #FFFFFF;
    }
  }
</style>
