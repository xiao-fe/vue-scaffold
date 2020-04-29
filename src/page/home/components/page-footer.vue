<template>
  <div class="page-footer" :style="styleObj">
    <div>
      <span v-for="(item1, index1) in companyInfoArr" :key="index1" class="item-text">{{item1}}</span>
    </div>
    <div class="link-company">
      <span>友情链接</span>
      <span v-for="(item2, index2) in linkArr" :key="index2" class="item-text">
        <a :href="item2.href" target="_blank">{{item2.name}}</a>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      styleObj: {
        type: Object,
        default: function () {
          return {'background-color': '#151720', 'color': '#999999'}
        }
      }
    },
    data() {
      return {
        companyInfoArr: [
          '联系地址：北京市朝阳区北苑路大羊坊十号桑普大厦 ',
          '网址：https://yonggongniu.daojia.com',
          '邮箱：bs-health@daojia-inc.com',
          '联系电话：(010)62533885'
        ],
        linkArr: [
          {name: '58蓝服', href: '//58lanfu.daojia.com/'},
          {name: '58同城', href: '//bj.58.com/?utm_source=market&spm=u-2d2yxv86y3v43nkddh1.BDPCPZ_BT'},
          {name: '58到家', href: '//bj.daojia.com'},
          {name: '快狗打车', href: '//suyun.daojia.com/?hmsr=baidupzpc2018101'},
          {name: '到家家政', href: '//www.daojia.com/juhe'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-footer {
    width: 100%;
    height: 160px;
    font-size: 14px;
    text-align: center;
    padding: 40px 0;
    > div {
      height: 38px;
      line-height: 38px;
      .item-text {
        font-weight:400;
        &:not(:last-child)::after {
         content: '|';
         width: 1px;
         opacity: 0.5;
         padding: 0 10px;
        }
      }
    }
    .link-company {
      span:first-child::after {
        content: '';
        padding-left: 20px;
      }
      a {
        color: inherit;
        &:hover {
          color: #fff;
        }
      }
    }
  }
</style>
