<template>
  <div class="cooperation-case-zone">
    <div class="title-tip" style="margin-bottom: 52px;">
      <div class="title">合作案例</div>
      <div class="tip">我们与多家企业合作，成功帮其节约大量成本</div>
    </div>
    <div class="case-content-zone">
      <div class="content-text">
        <div class="item-title">{{titleText}}</div>
        <div class="item-tip" v-for="tipI in tipArr">{{tipI}}</div>
        <div class="footer-num">
          <div v-for="numI in numDataArr">
            <p class="num-title">{{numI.title}}</p>
            <p class="num-value">
              <span>{{numI.value}}</span>
              <span>{{numI.unit}}</span>
            </p>
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
        titleText: '某互联网家政行业TOP1企业，拥有劳动者数量200万服务家庭数量2,000万+',
        tipArr: [
          '· 人员风控报告服务数量每月约100,000份+，成本每月节约120,000元+',
          '· 健康体检（仅北京地区）服务数量每月约5,000人+，成本每月节约80,000元+',
          '· 定制保险每月服务数量100,000份+，成本每月节约100,000元+'
        ],
        numDataArr: [
          {title: '累计节约成本', value: '约360万', unit: '/年'},
          {title: '规避风险人员', value: '10000+', unit: '人'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cooperation-case-zone {
    padding: 80px 0 110px 0;
    .case-content-zone {
      width: 1142px;
      height: 556px;
      margin: 0 auto;
      background: url("../../../assets/img/home/cooperation-case.png") no-repeat;
      background-size: 100% 100%;
      .content-text {
        padding: 100px 0 0 450px;
        .item-title {
          width: 524px;
          font-size:22px;
          font-weight:600;
          line-height:44px;
          color: #333333;
          &::after {
           content: '';
           display: block;
           margin: 16px 0;
           width: 28px;
           height: 0;
           text-align: center;
           border: 1px solid #FF6E25;
         }
        }
        .item-tip {
          font-size:16px;
          font-weight:400;
          line-height:32px;
          color: #333333;
        }
        .footer-num {
          display: flex;
          padding-top: 60px;
          > div:first-child {
            padding-right: 80px;
          }
          .num-title {
            font-size:16px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            padding-bottom: 8px;
          }
          .num-value {
            color:rgba(255,110,37,1);
            > span:first-child {
              font-size:36px;
              font-family:PingFangSC-Semibold,PingFang SC;
              font-weight:600;
            }
          }
        }
      }
    }
  }
</style>
