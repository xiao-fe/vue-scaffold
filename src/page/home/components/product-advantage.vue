<template>
  <div class="product-advantage-zone">
    <div class="title-tip">
      <div class="title">产品优势</div>
      <div class="tip">六字优势真言：全、真、优、易、快、省</div>
    </div>
    <div class="advantage-content">
      <div class="left-1">
        <div class="text-right">
          <div class="title">全</div>
          <div class="tip">
            <p>服务范围广</p>
            <p>多渠道人才、数据支持</p>
          </div>
        </div>
      </div>
      <div class="left-2">
        <div class="text-right">
          <div class="title">真</div>
          <div class="tip">
            <p>数据合法合规</p>
            <p>人源信息准时可靠</p>
          </div>
        </div>
      </div>
      <div class="left-3">
        <div class="text-right">
          <div class="title">优</div>
          <div class="tip">
            <p>服务全程跟进</p>
            <p>报告内容详尽可靠</p>
          </div>
        </div>
      </div>
      <div class="right-1">
        <div class="text-left">
          <div class="title">易</div>
          <div class="tip">
            <p>全线上操作</p>
            <p>简单易懂好上手</p>
          </div>
        </div>
      </div>
      <div class="right-2">
        <div class="text-left">
          <div class="title">快</div>
          <div class="tip">
            <p>服务响应快</p>
            <p>服务报告秒出</p>
          </div>
        </div>
      </div>
      <div class="right-3">
        <div class="text-left">
          <div class="title">省</div>
          <div class="tip">
            <p>省时省力</p>
            <p>省心省钱</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .product-advantage-zone {
    padding-top: 80px;
    margin-bottom: 150px;
    .advantage-content {
      position: relative;
      width: 836px;
      height: 420px;
      margin: 48px auto;
      background: url("../../../assets/img/home/product-advantage.png") no-repeat;
      background-size: 100% 100%;
      .title {
        font-size:24px;
        font-weight:600;
        color:#333;
        padding-bottom: 10px;
      }
      .tip {
        font-size:16px;
        font-weight:400;
        line-height: 32px;
        color:rgba(127,127,127,1);
      }
      .text-right {
        text-align: right;
      }
      .text-left {
        text-align: left;
      }
      .left-1 {
        position: absolute;
        top: 6px;
        left: -100px;
      }
      .left-2 {
        position: absolute;
        top: 174px;
        left: -150px;
      }
      .left-3 {
        position: absolute;
        top: 342px;
        left: -90px;
      }
      .right-1 {
        position: absolute;
        top: 2px;
        right: -10px;
      }
      .right-2 {
        position: absolute;
        top: 170px;
        right: -120px;
      }
      .right-3 {
        position: absolute;
        top: 380px;
        right: 2px;
      }
    }
  }
</style>
