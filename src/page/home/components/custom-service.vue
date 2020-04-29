<template>
  <el-dialog
    class="no-title-dialog"
    title=""
    :visible.sync="dialogVisible"
    width="550px">
    <div class="custom-service-zone">
      <div class="service-content">
        <span class="title">联系我们</span>
        <div class="tip">专业客服咨询并为您开通账号</div>
        <div class="contact-info">
          <p v-for="(item, index) in contactInfoArr" :key="index" class="contact-item">
            <img :src="item.imgUrl" alt="">
            <span>{{item.value}}</span>
          </p>
        </div>
      </div>
      <div class="custom-img">
        <img src="../../../assets/img/home/custom-service.png" alt="">
      </div>
    </div>
  </el-dialog>
</template>

<script>
  import person from '../../../assets/icons/person-2x.png';
  import phone from '../../../assets/icons/phone-2x.png';
  import mail from '../../../assets/icons/mail.png';

  export default {
    props: {
      value: Boolean
    },
    data() {
      return {
        dialogVisible: this.value,
        contactInfoArr: [
          {imgUrl: person, value: '周女士'},
          {imgUrl: phone, value: '(010)62533885'},
          {imgUrl: mail, value: 'bs-health@daojia-inc.com'},
        ]
      }
    },
    watch: {
      value: function (val) {
        this.dialogVisible =val;
      },
      dialogVisible: function (val) {
        this.$emit('input', val);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .custom-service-zone {
    display: flex;
    justify-content: center;
    .service-content {
      padding-top: 6px;
      .title {
        font-size:22px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(51,51,51,1);
      }
      .tip {
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        padding-top: 6px;
        &::after {
           content: '';
           display: block;
           margin: 30px 0;
           width: 30px;
           height: 0;
           border: 1px solid #FF6E25;
        }
      }
      .contact-info {
        padding: 0;
        > p {
          height: 36px;
          line-height: 36px;
          & > img{
             margin: 0 8px 4px 0;
           }
          img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
          }
          > span {
            font-size:16px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(51,51,51,1);
          }
        }
      }
    }
    .custom-img {
      margin-left: 44px;
      padding-top: 12px;
      img {
        width: 170px;
        height: 216px;
        vertical-align: middle;
      }
    }
  }
</style>
