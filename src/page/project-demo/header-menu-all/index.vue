<template>
  <div class="side-layout">
    <SideNav :menuList="menuList" :default-active="$route.matched[2]"></SideNav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SideNav from '../../../components/side-nav/index.vue';

  export default {
    name: 'HeaderMenu',
    components: { SideNav },
    data() {
      return {
        menuList: [
          {
            name: '菜单-1',
            path: '/menu1',
            icon: 'el-icon-location',
            children: [
              {
                name: '菜单-1-1', path: '/menu/1', icon: 'el-icon-location',
              },
              {
                name: '菜单-1-2', path: '/menu/2', icon: 'el-icon-location',
              },
            ],
          },
          {
            name: '菜单-2', path: '/menu2', icon: 'el-icon-location',
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  .side-layout {
    display: flex;
    height: calc(100% - 48px);
    .main {
      flex: 1;
      height: 100%;
      overflow: auto;
    }
  }
</style>
