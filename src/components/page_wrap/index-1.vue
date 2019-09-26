<template>
  <div class="page-sub">
    <el-row class="sub-header" type="flex" justify="space-between">
      <el-col :span="12">
        <slot name="sub-front"></slot>
      </el-col>
      <el-col :span="12" class="sub-end">
        <slot name="sub-end"></slot>
      </el-col>
    </el-row>
    <slot name="content"></slot>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .page-sub {
    width: 100%;
    height: 100%;
    .sub-header {
      width: 100%;
      height: 48px;
      line-height: 48px;
    }
    .sub-end {
      text-align: right;
    }
  }
</style>
