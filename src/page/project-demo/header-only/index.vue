<template>
  <div class="header-only">
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: 'header-only',
    data () {
      return {
        text: '奔跑'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-only {
    position: relative;
    height: calc(100% - 48px);
    width: 100%;
    background: url('../../../assets/img/logo.jpg') no-repeat;
    background-size: 80% 100%;
    background-attachment: fixed;
    background-position: center;
    p {
      height: 200px;
      width: 200px;
      position:absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -100px;
      z-index: 99;
      font-size: 96px;
      font-weight: bold;
      color: red;
    }
  }
</style>
