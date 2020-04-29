<template>
  <div class="supply-service-item">
    <div class="item-title-tip title-tip">
      <div class="title" style="color:#fff;">用工供给</div>
      <div class="tip" style="color:#FFF; opacity: 0.7;">多招聘模式（线索付费+灵活用工）</div>
    </div>
    <div class="supply-content">
      <div v-for="(item2, index2) in supplyItemArr" :key="index2" class="content-item">
        <div class="img-index"><img :src="item2.img" alt=""></div>
        <div class="item-title">{{item2.title}}</div>
        <div class="item-tip">{{item2.tip1}}</div>
        <div class="item-tip">{{item2.tip2}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import supply1 from '../../../assets/img/home/supply-1.png';
  import supply2 from '../../../assets/img/home/supply-2.png';
  import supply3 from '../../../assets/img/home/supply-3.png';
  import supply4 from '../../../assets/img/home/supply-4.png';

  export default {
    data() {
      return {
        supplyItemArr: [
          {img: supply1, title: '简历付费', tip1: '按简历线索收费', tip2: '猎聘模式'},
          {img: supply2, title: '人次付费', tip1: '按人次收费，整体外包', tip2: '提供可上岗人员'},
          {img: supply3, title: '灵活用工', tip1: '灵活用工，保证项目进度', tip2: '按项目/时间付费'},
          {img: supply4, title: '直聘开店', tip1: '按系统账号付费', tip2: 'BOSS直聘模式'},
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .supply-service-item {
    width: 100%;
    height: 442px;
    padding: 80px 0;
    margin: 0 0 80px 0;
    background: url("../../../assets/img/home/supply.png") no-repeat;
    background-size: cover;
    background-position: 50%;
    .item-title-tip {
      padding-bottom: 30px;
    }
    .supply-content {
      padding: 52px 80px 0 80px;
      display: flex;
      justify-content: space-around;
      .content-item {
        width: 180px;
        position: relative;
        text-align: center;
        .img-index {
          top: -36px;
          left: 58px;
          position: absolute;
          img {
            width: 64px;
            height: 52px;
          }
        }
        .item-title {
          font-size:22px;
          font-weight:600;
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
          padding-bottom: 6px;
          color:rgba(255,255,255,1);
          &:last-child {
             opacity: 0.5;
          }
        }
        .manage-img {
          img {
            width: 74px;
            height: 74px;
          }
        }
        .manage-title {
          font-size:22px;
          font-weight:600;
          padding-top: 10px;
          color:rgba(51,51,51,1);
        }
      }
  }
  }
</style>
