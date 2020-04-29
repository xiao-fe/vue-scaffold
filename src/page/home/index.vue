<template>
  <div class="no-login-home-page">
    <div class="home-page-title">
      <div class="header-title">
        <NormalTitle :dataArr="homePageLabels" @click-item="selectProductPart" @login="$router.push('/login')"
                     @apply="applyJoin" @reload="reloadPage" class="scroll-hide-title" :isLogin="isLogin"></NormalTitle>
        <ScrollTitle :dataArr="homePageLabels" @click-item="selectProductPart" @login="$router.push('/login')"
                     @apply="applyJoin" @reload="reloadPage" class="scroll-show-title" :isLogin="isLogin"></ScrollTitle>
      </div>
      <HeaderContent @apply="applyJoin"></HeaderContent>
    </div>
    <div class="service-plan-zone">
      <ServicePlan></ServicePlan>
    </div>
    <div class="product-introduce-zone">
      <EmploySupply></EmploySupply>
      <EmployManage></EmployManage>
      <EmployGuarantee></EmployGuarantee>
    </div>
    <div class="our-advantage-zone">
      <ProductAdvantage></ProductAdvantage>
      <SkillAdvantage></SkillAdvantage>
    </div>
    <div class="cooperation-case-zone">
      <CooperationCase></CooperationCase>
    </div>
    <div class="contact-product-zone">
      <ProductJoin @apply="applyJoin"></ProductJoin>
    </div>
    <div class="page-footer-zone">
      <PageFooter></PageFooter>
    </div>
    <CustomService v-model="customSwitch"></CustomService>
  </div>
</template>

<script>
  import { getCookie } from '../../utils/cookie';
  import riskItem from '../../mixins/risk-item';
  import NormalTitle from './components/normal-title-zone.vue';
  import ScrollTitle from './components/scrolll-title-zone.vue';
  import HeaderContent from './components/header-content.vue';
  import ServicePlan from './components/service-plan.vue';
  import EmploySupply from './components/employ-supply.vue';
  import EmployManage from './components/employ-manage.vue';
  import EmployGuarantee from './components/employ-guarantee.vue';
  import ProductAdvantage from './components/product-advantage.vue';
  import SkillAdvantage from './components/skill-advantage.vue';
  import CooperationCase from './components/cooperation-case.vue';
  import ProductJoin from './components/join-product.vue';
  import PageFooter from './components/page-footer.vue';
  import CustomService from './components/custom-service.vue';

  export default {
    components: {NormalTitle, ScrollTitle, HeaderContent, ServicePlan, EmploySupply, EmployManage, EmployGuarantee, ProductAdvantage,
                 SkillAdvantage, CooperationCase, ProductJoin, PageFooter, CustomService},
    mixins: [riskItem],
    inject:['reload'],
    data() {
      return {
        homePageLabels: [
          {name: '服务方案', active: false, selector: '.service-plan-zone'},
          {name: '产品介绍', active: false, selector: '.product-introduce-zone'},
          {name: '我们的优势', active: false, selector: '.our-advantage-zone'},
          {name: '合作案例', active: false, selector: '.cooperation-case-zone'},
        ],
        scrollSwitch: false, // 点击title标签触发滚动标识
        customSwitch: false, // 客服弹框标识
        isLogin: false, // 是否登录标识
      }
    },
    methods: {
      selectProductPart(index, selector) {
        this.scrollSwitch = true;
        this.homePageLabels = this.selectCancelItem(this.homePageLabels, index);
        this.smoothScroll(selector);
      },
      smoothScroll(selector) { // 平滑滚动
        let that = this;
        let total = that.$el.querySelector(selector).offsetTop;
        let distance = document.querySelector('.no-login-home-page').scrollTop;
        // const step = 30;
        // 平滑滚动，时长700ms，每10ms一跳，共70跳
        let step = total / 70;
        if (total > distance) {
          smoothDown();
        } else {
          let newTotal = distance - total;
          step = newTotal / 70;
          smoothUp();
        }
        function smoothDown () {
          if (distance < total) {
            distance += step;
            document.querySelector('.no-login-home-page').scrollTop = distance;
            setTimeout(smoothDown, 10);
          } else {
            document.querySelector('.no-login-home-page').scrollTop = total;
            that.scrollSwitch = false;
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step;
            document.querySelector('.no-login-home-page').scrollTop = distance;
            setTimeout(smoothUp, 10);
          } else {
            document.querySelector('.no-login-home-page').scrollTop = total;
            that.scrollSwitch = false;
          }
        }
      },
      dealScrollEvent() {
        let clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        let scrollTop = document.querySelector('.no-login-home-page').scrollTop;
        let headerTitle = document.querySelector('.header-title');
        if (scrollTop > 60) headerTitle.classList.add('scroll-switch');
        else headerTitle.classList.remove('scroll-switch');
        if (this.scrollSwitch) return;
        let realTop = scrollTop + clientHeight / 2;
        console.log('watch---scroll----', realTop);
        if (realTop > 540 && realTop < 1142) this.homePageLabels = this.selectCancelItem(this.homePageLabels, 0);
        else if (realTop > 1142 && realTop < 2962) this.homePageLabels = this.selectCancelItem(this.homePageLabels, 1);
        else if (realTop > 2962 && realTop < 4420) this.homePageLabels = this.selectCancelItem(this.homePageLabels, 2);
        else if (realTop > 4420) this.homePageLabels = this.selectCancelItem(this.homePageLabels, 3);
        else this.homePageLabels = this.selectCancelItem(this.homePageLabels, -1);
      },
      applyJoin() {
        this.customSwitch = true;
      },
      reloadPage() {
        this.reload();
      },
      judgeLogin() {
        this.isLogin = false;
        if (getCookie('strTicket') && getCookie('strUser')) this.isLogin = true;
        else this.isLogin = false;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.judgeLogin();
        this.scrollSwitch = false;
        window.addEventListener('scroll', this.dealScrollEvent, true);  // 监听（绑定）滚轮滚动事件
      })
    },
    destroyed () {
      window.removeEventListener('scroll', this.dealScrollEvent);   //  离开页面清除（移除）滚轮滚动事件
    }
  }
</script>

<style lang="scss" scoped>
  .no-login-home-page {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #fff;
    position: relative;
    .home-page-title {
      width: 100%;
      height: 540px;
      background: url("../../assets/img/home/home-title.png") no-repeat;
      background-size: cover;
      background-position: 50%;
      .header-title {
        .scroll-hide-title {
          opacity: 1;
          height: 60px;
          z-index: 100;
          /*-moz-transition:all 1s linear .3s;*/
          /*-webkit-transition:all 1s linear .3s;*/
          /*-o-transition:all 1s linear .3s;*/
          /*-ms-transition:all 1s linear .3s;*/
          /*transition:all 1s linear .3s;*/
        }
        .scroll-show-title {
          opacity: 0;
          height: 60px;
          -moz-transition:all 0.5s ease-out .0s;
          -webkit-transition:all 0.5s ease-out .0s;
          -o-transition:all 10.5s ease-out .0s;
          -ms-transition:all 0.5s ease-out .0s;
          transition:all 0.5s ease-out .0s;
          /*-moz-transform:translateY(-10%);*/
          /*-webkit-transform:translateY(-10%);*/
          /*-o-transform:translateY(-10%);*/
          /*transform:translateY(-10%);*/
        }
      }
      .scroll-switch {
        .scroll-hide-title {
          opacity: 0 !important;
        }
        .scroll-show-title {
          /*-moz-transform:translateY(0%);*/
          /*-webkit-transform:translateY(0%);*/
          /*-o-transform:translateY(0%);*/
          /*transform:translateY(0%);*/
          opacity: 1 !important;
          z-index: 100;
        }
      }
    }
  }
</style>
