<template>
  <div class="error">
    <div style="padding-bottom: 20px; font-size: large;">
      <span>您当前没有此页面权限，请联系管理员（xxx）</span>
    </div>
    <img src="../../assets/img/forbid.png" width="455" alt="无权限">
  </div>
</template>

<script>
export default {
  name: '无权限',
  data() {
    return {};
  },
};
</script>

<style scoped>
  .error {
    padding: 20px 100px;
    text-align: center;
  }
</style>
