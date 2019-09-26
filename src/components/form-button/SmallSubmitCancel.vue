<template>
  <span>
    <span class="p-button" @click="clickSubmit" :title="submitName">
      <i class="el-icon-check"></i>
      {{submitName}}
    </span>
    <span class="p-button" @click="clickCancel" :title="cancelName">
      <i class="el-icon-close"></i>
      {{cancelName}}
    </span>
  </span>
</template>

<script>
  export default {
    name: 'PSmallSubmitCancel', // 保存取消小按钮,一般放在form表单右上角
    props: {
      submitName: {
        type: String,
        default: '保存'
      },
      cancelName: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      clickSubmit () {
        this.$emit('submit')
      },
      clickCancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style>

</style>
