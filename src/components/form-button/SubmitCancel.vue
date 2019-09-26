<template>
  <div class="d-submit-cancel">
    <hr v-if="!nohr">
    <el-button type="primary" @click="submit" icon="el-icon-check">{{submitName}}</el-button>
    <el-button @click="cancel" icon="el-icon-close">{{cancelName}}</el-button>
  </div>
</template>

<script>
  export default {
    name: 'PSubmitCancel', // 保存取消,大按钮,一般放在form表达下边正中间
    props: {
      nohr: Boolean,
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
      submit () {
        this.$emit('submit')
      },
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style>
  .d-submit-cancel {
    text-align: center;
    width: 100%;
  }

  .d-submit-cancel hr {
    margin-top: 0px;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 1px solid #dcdfe6;
  }
</style>
