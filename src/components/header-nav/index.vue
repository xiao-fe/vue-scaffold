<template>
  <div class="page-zone">
    <Header :menuList="menuList"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../layout-head/index.vue';

  export default {
    name: 'HeadNav',
    components: {Header},
    data () {
      return {
        menuList: [
          {path: '/head-menu', name: '一级二级导航'},
          {path: '/head-only', name: '只有一级导航'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-zone {
    width: 100%;
    height: 100%;
  }
</style>
