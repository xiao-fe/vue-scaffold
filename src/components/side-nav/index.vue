<template>
  <div :class="['side-nav',{'collapse':isCollapseBool}]">
    <el-menu
      :default-active="defaultActive.path"
      :active-text-color="activeTextColor"
      :text-color="textColor"
      :collapse="isCollapseBool"
      :unique-opened="true"
      :router="true">
      <template v-for="(item) in menuList">
        <el-submenu index="sub-1" :key="item.path" v-if="item.children && item.children.length>0">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title" :title="item.name">{{item.name}}</span>
          </template>
          <el-menu-item v-for="(subItem) in item.children" :index="subItem.path" :key="subItem.path">
            {{subItem.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-else :key="item.path">
          <i :class="item.icon"></i>
          <span slot="title" :title="item.name">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="icon-btn">
      <i @click="isCollapseBool=!isCollapseBool" :class="['el-icon-d-arrow-left',{'reverse':isCollapseBool}]"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideNav',
    props: {
      activeTextColor: { type: String, default: '#409EFF' },
      textColor: { type: String, default: '#ffffff' },
      menuList: {
        type: Array,
        default() {
          return [];
        },
      },
      defaultActive: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    data() {
      return {
        isCollapseBool: false,
      };
    },
    computed: {},
    created() {
      /* eslint-disable */
      // console.log(11, this.$attrs);
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .collapse {
     width: 60px;
     transition-timing-function: linear;
     .el-menu--collapse {
      width: 60px;
      transition: width 1s;
     }
  }
  .icon-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 20px;
    cursor: pointer;
    opacity: .6;
    &:hover {
       color: white;
       opacity: 1;
     }
    /*i {*/
      /*transition: transform .2s linear;*/
      /*&.reverse {*/
         /*transform: rotate(540deg);*/
      /*}*/
    /*}*/
  }
</style>
