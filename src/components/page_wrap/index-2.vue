<template>
  <div class="page-zone">
    <div class="search-zone">
      <slot name="search"></slot>
    </div>
    <hr v-if="hr">
    <div class="page-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      hr: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-zone {
    width: 100%;
    height: 100%;
    padding: 10px 0;
    .search-zone {
      padding-bottom: 10px;
    }
    .page-content {
      padding: 10px 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
