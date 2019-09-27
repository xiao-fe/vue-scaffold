<template>
  <div class="layout-header">
    <Logo></Logo>
    <el-menu
      :default-active="defaultActive.path"
      class="el-menu-list"
      :router="true"
      mode="horizontal"
      :active-text-color="activeTextColor"
      :text-color="textColor"
      @select="handleSelect">
      <el-menu-item v-for="(item,index) in menuList" :index="item.path" :key="index">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import Logo from './Logo.vue';

  export default {
    name: 'Header',
    props: {
      activeTextColor: { type: String, default: '#409EFF' },
      textColor: { type: String, default: '#ffffff' },
      menuList: {
        type: Array,
        default() {
          return [];
        },
      },
      defaultActive: { type: Object, default() { return {}; } },
    },
    components: {Logo},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu-list {
    flex: 1;
    border: none;
    .el-menu-item {
      height: 100%;
      line-height: inherit;
      &:focus, &:hover {
        background-color: rgba(67, 74, 80, 1.0);
      }
    }
  }
</style>
