<template>
  <div class="common-guarantee-zone">
    <div v-for="(item, index) in dataArr" :key="index" class="content-item">
      <img :src="item.img" alt="">
      <div class="item-title" :class="{'top-more': isTop}">{{item.title}}</div>
      <div class="item-tip">{{item.tip}}</div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      dataArr: {
        type: Array,
        default: function () {
          return [];
        }
      },
      isTop: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .common-guarantee-zone {
    width: 1200px;
    padding-top: 42px;
    display: flex;
    justify-content: center;
    .content-item {
      width: 260px;
      height: 386px;
      text-align: center;
      background:rgba(255,255,255,1);
      box-shadow:0px 20px 60px -20px rgba(93,103,136,0.14);
      &:not(:last-child) {
        margin-right: 42px;
      }
      img {
        width: 100%;
        height: 170px;
      }
      .item-title {
        font-size:22px;
        font-weight:600;
        padding-top: 20px;
        color:#333;
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
      .top-more {
        padding-top: 36px;
      }
      .item-tip {
        font-size:16px;
        font-weight:400;
        line-height:32px;
        padding: 0 26px;
        color:rgba(102,102,102,1);
      }
    }
  }
</style>
