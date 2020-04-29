<template>
  <div class="guarantee-service-item">
    <div class="title-tip">
      <div class="title">用工保障</div>
      <div class="tip">风控、保险和健康服务全面规避用工风险,减少管理成本</div>
    </div>
    <div class="guarantee-content">
      <el-tabs v-model="activeName" class="reset-tab home-tab">
        <el-tab-pane label="风控" name="risk">
          <div class="risk-tab">
            <div v-for="(item1, index1) in guaranteeItemArr" :key="index1" class="risk-item">
              <img :src="item1.img" alt="">
              <div class="title">{{item1.title}}</div>
              <p v-for="tip1 in item1.tips" class="tip-name">{{tip1}}</p>
              <el-popover
                placement="right-start"
                title=""
                trigger="hover">
                <div><p class="tip-name" v-for="tip2 in item1.moreTips">{{tip2}}</p></div>
                <div class="tip-name more-hover" v-show="item1.moreTips.length" slot="reference">更多...</div>
              </el-popover>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="保险" name="insurance">
          <div class="content-zone">
            <CommonGuarantee :dataArr="insuranceItemArr"></CommonGuarantee>
          </div>
        </el-tab-pane>
        <el-tab-pane label="健康" name="health">
          <div class="content-zone">
            <CommonGuarantee :dataArr="healthItemArr" isTop></CommonGuarantee>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import basicSafe from '../../../assets/img/home/basic-safe.png';
  import societySafe from '../../../assets/img/home/society-safe.png';
  import skillSafe from '../../../assets/img/home/skill-safe.png';
  import masterRisk from '../../../assets/img/home/master-risk.png';
  import teamRisk from '../../../assets/img/home/team-risk.png';
  import addRisk from '../../../assets/img/home/add-risk.png';
  import businessRisk from '../../../assets/img/home/business-risk.png';
  import healthCertificate from '../../../assets/img/home/health-certificate.png';
  import houseCheck from '../../../assets/img/home/house-check.png';
  import companyCheck from '../../../assets/img/home/company-check.png';
  import checkMake from '../../../assets/img/home/check-make.png';
  import CommonGuarantee from './common-guarantee.vue';

  export default {
    components: {CommonGuarantee},
    data() {
      return {
        activeName:'risk',
        guaranteeItemArr: [
          {img: basicSafe, title: '基础信息安全', tips: ['身份证实名', '手机号实名', '银行卡实名', '人证合一'], moreTips: []},
          {img: societySafe, title: '社会信息安全', tips: ['司法信息', '网贷风险', '限高令', '失信被执行人查询'], moreTips: []},
          {img: skillSafe, title: '工作技能安全', tips: ['职业资格证查询', '商业利益冲突', '个人偿债能力分析', '驾驶证查询'], moreTips: []},
        ],
        insuranceItemArr: [
          {img: masterRisk, title: '雇主责任保险', tip: '转嫁企业用工风险，降低运营成本，解决企业老板后顾之忧'},
          {img: teamRisk, title: '团体意外保险', tip: '保障团体意外伤害及团体交通工具意外，保额及保障期限灵活可选'},
          {img: addRisk, title: '补充医疗保险', tip: '标准企业福利，满足员工意外身故伤残、住院、看病保障刚需，可定制'},
          {img: businessRisk, title: '行业定制保险', tip: '深入家政、货运、餐旅等行业，为企业定制化设计保险产品'},
        ],
        healthItemArr: [
          {img: healthCertificate, title: '健康证', tip: '专业合规的健康证预约办理渠道，价格低于市场'},
          {img: houseCheck, title: '家政行业体检', tip: '专业符合家政业务的体检方案，48小时出线上报告'},
          {img: companyCheck, title: '企业福利体检', tip: '企业福利首选，多种体检套餐可选择'},
          {img: checkMake, title: '体检定制', tip: '结合行业给出专业建议，24小时内出方案，支持上门体检'},
        ]
      }
    },
    methods: {
      dealTipShow() {
        let dataArr = JSON.parse(JSON.stringify(this.guaranteeItemArr));
        dataArr.forEach(d => {
          let nameArr = JSON.parse(JSON.stringify(d.tips));
          if (nameArr.length > 4) {
            d.moreTips = nameArr.slice(3);
            d.tips = nameArr.slice(0, 3);
          }
        });
        this.guaranteeItemArr = dataArr;
      }
    },
    mounted() {
      this.dealTipShow();
    }
  }
</script>

<style lang="scss" scoped>
  .guarantee-service-item {
    height: 780px;
    padding: 52px 0 20px 0;
    margin-top: 42px;
    background:rgba(251,251,251,1);
    .guarantee-content {
      width: 1200px;
      margin: 36px auto;
      padding: 20px 0;
      position: relative;
      .content-zone {
        width: 1290px;
        height: 480px;
        margin: 0 auto;
        background: url("../../../assets/img/home/risk.png") no-repeat;
        background-size: 100% 100%;
      }
      .risk-tab {
        display: flex;
        padding: 32px 0;
        justify-content: center;
        .risk-item {
          width: 302px;
          height: 404px;
          margin: 0 50px;
          padding-top: 50px;
          text-align: center;
          background:rgba(255,255,255,1);
          box-shadow:0px 12px 60px -20px rgba(93,103,136,0.14);
          img {
            width: 100px;
            height: 100px;
          }
          .title {
            font-size:22px;
            font-weight:600;
            color:rgba(51,51,51,1);
            padding: 24px 0 6px 0;
          }
          .more-hover {
            width: 80px;
            text-align: center;
            margin: 0 auto;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
