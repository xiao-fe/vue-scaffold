export default {
  data () {
    return {
    }
  },
  methods: {
    paginationMixinSizeChange (value) {
      this.searchParams.pageSize = value;
      // 每次调整pageSize时，调整第一页
      this.searchParams.pageIndex = 1;
      this.searchResultShow();
    },
    paginationMixinCurrentChange (value) {
      this.searchParams.pageIndex = value;
      // this.currentPage = value;
      this.searchResultShow();
    }
  }
};
