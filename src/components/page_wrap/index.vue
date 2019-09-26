<template>
  <div class="page-zone">
    <slot name="header">
      <el-row class="page-header" type="flex" justify="space-between">
        <el-col :span="12">
          <span class="page-title">{{title}}</span>
        </el-col>
        <el-col :span="12" class="end-side">
          <el-button type="primary" v-if="buttonName">{{buttonName}}</el-button>
        </el-col>
      </el-row>
    </slot>
    <slot name="content">
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      buttonName: String
    }
  }
</script>

<style lang="scss" scoped>
  .page-zone {
    padding: 0 10px 10px;
    width: 100%;
    height: 100%;
    .page-header {
      height: 60px;
      line-height: 60px;
      .page-title {
        font-size: 24px;
      }
      .end-side {
        text-align: right;
      }
    }
  }
</style>
