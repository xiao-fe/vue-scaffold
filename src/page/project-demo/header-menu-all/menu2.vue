<template>
  <div class="page">
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: '成长'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  .text {
    font-family: Cursive;
    font-size: 86px;
    font-weight: bold;
    color: brown;
  }
  }
</style>

