export default {
  data() {
    return {
    }
  },
  methods: {
    reloadPage() {
      this.$emit('reload');
    },
    clickItem(index, selector) {
      this.$emit('click-item', index, selector);
    },
    loginStart() {
      this.$emit('login');
    },
    applyJoin() {
      this.$emit('apply');
    }
  }
}
