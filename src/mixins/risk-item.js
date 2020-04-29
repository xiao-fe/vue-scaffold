export default {
  methods: {
    selectCancelItem(arrItems, index) { // 选中套餐
      let packageArr = JSON.parse(JSON.stringify(arrItems));
      let packageItem = packageArr[index];
      packageArr.forEach(p => {
        p.active = false;
      });
      if (packageItem) {
        packageItem.active = true;
        packageArr.splice(index, 1, packageItem);
      }
      return packageArr;
    },
  }
}
