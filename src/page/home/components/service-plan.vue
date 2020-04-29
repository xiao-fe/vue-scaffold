<template>
  <div class="service-plan-zone">
    <div class="service-title-tip title-tip">
      <div class="title">服务方案</div>
      <div class="tip">用工供给、用工管理、用工保障三方面全方位助力企业用工</div>
    </div>
    <div class="service-product">
      <div class="product-introduce">
        <div v-for="(item1, index1) in productFeatures" :key="index1" class="introduce-item">
          <div class="title">{{item1.title}}</div>
          <div class="tips">
            <span v-for="tipI in item1.tips">{{tipI}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        productFeatures: [
          {title: '用工供给', tips: ['线索提供', '简历筛选', '招聘面试']},
          {title: '用工管理', tips: ['在线签约', '信息管理', '薪酬发放']},
          {title: '用工保障', tips: ['风控服务', '健康服务', '保险服务']},
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .service-plan-zone {
    padding: 80px 0;
    .service-title-tip {
      padding-bottom: 60px;
    }
    .service-product {
      position: relative;
      width: 1200px;
      height: 296px;
      margin: 0 auto;
      background: url("../../../assets/img/home/product.png") no-repeat;
      background-size: 100% 100%;
      .product-introduce {
        display: flex;
        padding: 96px 0 0 192px;
        .introduce-item {
          width: 250px;
          height: 150px;
          padding: 30px 22px;
          margin: 0 12px;
          text-align: center;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 10px 40px 0px rgba(65, 70, 100, 0.04);
          .title {
            font-size: 18px;
            font-weight: 600;
            color: rgba(44, 47, 54, 1);
            &::after {
              content: '';
              display: block;
              margin: 20px auto;
              width: 20px;
              height: 0;
              text-align: center;
              border: 1px solid #FF6E25;
            }
          }
          .tips {
            display: flex;
            justify-content: space-between;
            color: #666;
          }
        }
      }
    }
  }
</style>
