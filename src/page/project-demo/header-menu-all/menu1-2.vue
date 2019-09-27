<template>
  <div class="page">
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: this.$store.state.demo.menuText2
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
    width: 640px;
    height: 240px;
    font-family: Cursive;
    text-indent: 76px;
    font-size: 36px;
    font-weight: bold;
    color: chartreuse;
  }
  }
</style>

