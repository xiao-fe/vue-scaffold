<template>
  <div class="table-zone">
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total="totalRows"
      :page-size="pageSize"
      :current-page.sync="presentPage"
      @size-change="pageSizeChange"
      @current-change="pageChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      totalRows: [Number, String],
      pageSize: {
        type: Number,
        default: 10
      },
      pageSizeArr: {
        type: Array,
        default: function () {
          return [];
        }
      },
      currentPage: Number
    },
    watch: {
      currentPage (val) {
        this.presentPage = val;
      }
    },
    data () {
      return {
        presentPage: this.currentPage
      }
    },
    methods: {
      pageChange (page) {
        this.$emit('page-change', page);
      },
      pageSizeChange (size) {
        this.$emit('page-size-change', size);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-zone {
    float: right;
    padding-top: 10px;
  }
</style>
