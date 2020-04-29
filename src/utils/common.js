function transformlocalToServiceSide(data) {
  const _DATA = JSON.parse(JSON.stringify(data));
  const L = _DATA.length;
  for (let i = 0; i < L; i++) {
    _DATA[i].photoUrl = _DATA[i].photoUrl[0].url;
  }
  return _DATA;
}

function transformServiceSideTolocal(data) {
  const L = data.length;
  for (let i = 0; i < L; i++) {
    data[i].photoUrl = [{url: data[i].photoUrl}];
  }
  return data;
}

export {transformlocalToServiceSide, transformServiceSideTolocal};
