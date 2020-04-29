<template>
  <div class="manage-service-item">
    <div class="title-tip">
      <div class="title">用工管理</div>
      <div class="tip">电子合同在线签约，自动算薪方便简捷</div>
    </div>
    <div class="supply-content">
      <div v-for="(item, index) in manageItemArr" :key="index" class="content-item">
        <div class="hover-hidden-item">
          <div class="manage-img"><img :src="item.img" alt=""></div>
          <div class="manage-title">{{item.title}}</div>
        </div>
        <div class="hover-show-item">
          <div class="title">{{item.mouseTitle}}</div>
          <div class="tips">
            <p v-for="pI in item.tips">{{pI}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import staff from '../../../assets/img/home/staff.png';
  import pay from '../../../assets/img/home/pay.png';
  import tax from '../../../assets/img/home/tax.png';
  import report from '../../../assets/img/home/report.png';

  export default {
    data() {
      return {
        manageItemArr: [
          {img: staff, title: '人员管理', mouseTitle: '信息在线化 ', tips: ['二维码在线收集劳务人员信息', '线上签订入职电子协议']},
          {img: pay, title: '薪酬管理', mouseTitle: '一键算薪 一键发薪 ', tips: ['配置薪酬结算方案', '自动计算全员薪资', '银企直联，员工薪资秒到账']},
          {img: tax, title: '税收筹划', mouseTitle: '代征代缴代开 ', tips: ['线上个体工商户注册', '代征代缴个体经营所得税', '代开发票']},
          {img: report, title: '报表统计', mouseTitle: '一键生成 ', tips: ['企业人员成本分析报表月度，季度，年度“一键生成”']},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .manage-service-item {
    .supply-content {
      padding: 50px 80px 0 80px;
      display: flex;
      justify-content: space-around;
      .content-item {
        position: relative;
        width: 260px;
        height: 260px;
        text-align: center;
        &:hover {
         cursor: pointer;
         .hover-hidden-item {
           /*-moz-transform:rotate(90deg) scale(0.5) ;*/
           /*-webkit-transform:rotate(90deg) scale(0.5);*/
           /*-o-transform:rotate(90deg) scale(0.5);*/
           /*transform:rotate(90deg) scale(0.5);*/
           opacity: 0;
         }
         .hover-show-item {
           -moz-transform:translateY(0%);
           -webkit-transform:translateY(0%);
           -o-transform:translateY(0%);
           transform:translateY(0%);
           opacity: 1;
         }
        }
        > div {
          width: 100%;
          height: 100%;
        }
        .hover-hidden-item {
          position: absolute;/*注意这两个盒子要设置为绝对定位*/
          /*为鼠标移入时隐藏的那个盒子的显示绑定动画*/
          /*-moz-transition:all 0.5s ease-out .0s;*/
          /*-webkit-transition:all 0.5s ease-out .0s;*/
          /*-o-transition:all 0.5s ease-out .0s;*/
          /*-ms-transition:all 0.5s ease-out .0s;*/
          /*transition:all 0.5s ease-out .0s;*/
          padding-top: 40px;
          .manage-img {
            img {
              width: 74px;
              height: 74px;
            }
          }
          .manage-title {
            font-size:22px;
            font-weight:600;
            padding: 18px 0 90px 0;
            color:rgba(51,51,51,1);
          }
        }
        .hover-show-item {
          position: absolute; /*注意这两个盒子要设置为绝对定位*/
          opacity: 0;
          /*为鼠标移入时显示的那个盒子的显示绑定动画*/
          -moz-transition:all 0.2s linear .0s;
          -webkit-transition:all 0.2s linear .0s;
          -o-transition:all 0.2s linear .0s;
          -ms-transition:all 0.2s linear .0s;
          transition:all 0.2s linear .0s;
          -moz-transform:translateY(10%);
          -webkit-transform:translateY(10%);
          -o-transform:translateY(10%);
          transform:translateY(10%);
          padding: 46px 20px;
          background:rgba(255,255,255,1);
          box-shadow:0px 10px 80px -20px rgba(54,64,100,0.14);
          .title {
            font-size:18px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(51,51,51,1);
            &::after {
               content: '';
               display: block;
               margin: 12px auto;
               width: 28px;
               height: 0;
               text-align: center;
               border: 1px solid #FF6E25;
            }
          }
          .tips {
            > p {
              line-height: 32px;
              font-size:14px;
              font-family:PingFangSC-Regular,PingFang SC;
              font-weight:400;
              color:rgba(51,51,51,1);
            }
          }
        }
      }
  }
  }
</style>
