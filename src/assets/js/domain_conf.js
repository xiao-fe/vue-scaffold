const conf = {
  dev: {
    service: 'http://local.cn'
  },
  test: {
    service: 'http://test.cn'
  },
  box: {
    service: 'http://box.cn'
  },
  prod: {
    service: 'http://prod.cn'
  }
};

function checkENV () {
  // const w = window.location.hostname;
  const w = window.location.href;
  const ENV = {
    dev: 'local.cn',
    test: 'test.cn',
    box: 'box.cn',
    prod: 'prod.cn'
  };
  const envValues = Object.values(ENV);
  const envKeys = Object.keys(ENV);
  let j = '';
  envValues.forEach((c, i) => {
    if (w.includes(c)) {
      j = envKeys[i];
    }
  });
  console.log(j);
  return j;
}
console.log('当前环境：：：：：：@@NODE_ENV' + checkENV());
export default conf[checkENV()];
