<template>
  <div class="skill-advantage-zone">
    <div class="title-tip">
      <div class="title" style="color: #FFFFFF;">技术优势</div>
      <div class="tip" style="color: #FFFFFF; opacity: 0.7;">智能系统+大数据管控助力企业发展</div>
    </div>
    <div class="skill-content-zone">
      <div v-for="(item, index) in skillAdvantagesArr" :key="index" class="content-item">
        <img :src="item.img" alt="">
        <div class="item-title">{{item.title}}</div>
        <div class="item-tip" v-for="tipI in item.tips">{{tipI}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import cloudSystem from '../../../assets/img/home/cloud-system.png';
  import aiRisk from '../../../assets/img/home/ai-risk.png';
  import bigData from '../../../assets/img/home/big-data.png';
  import techWork from '../../../assets/img/home/tech-work.png';

  export default {
    data() {
      return {
        skillAdvantagesArr: [
          {img: cloudSystem, title: 'AaaS云系统', tips: ['人员数据云储存', '服务智能推荐', '多端系统管理']},
          {img: aiRisk, title: '智能风控', tips: ['智能风控安全保障', '舆情分析', '黑名单区块链加密']},
          {img: bigData, title: '大数据', tips: ['员工画像', '大数据用工风险分析', '数据仪表盘']},
          {img: techWork, title: '科技用工', tips: ['一站式用工解决方案', '员工动态管理', '用工场景智能组合']},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skill-advantage-zone {
    width: 100%;
    height: 694px;
    padding: 80px 0;
    background: url("../../../assets/img/home/skill-back.png") no-repeat;
    background-size: 100% 100%;
    .skill-content-zone {
      padding-top: 50px;
      display: flex;
      justify-content: center;
      .content-item {
        width: 270px;
        height: 374px;
        padding: 40px 0;
        text-align: center;
        background:rgba(16,18,32,0.6);
        &:not(:last-child) {
           margin-right: 42px;
         }
        img {
          width: 110px;
          height: 110px;
        }
        .item-title {
          font-size:22px;
          font-weight:600;
          padding-top: 20px;
          color:rgba(255,255,255,1);
          &::after {
           content: '';
           display: block;
           margin: 16px auto;
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
          padding: 0 40px;
          color:rgba(255,255,255,0.6);
        }
      }
    }
  }
</style>
