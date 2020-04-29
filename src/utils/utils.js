import axios from 'axios';

function toD(num) {
  return num < 10 ? '0' + num : '' + num;
}

function tranTime(time, type) {
  if (time > 0) {
    const date = new Date(time);
    if (type === 'month') {
      return date.getFullYear() + '-' + toD(date.getMonth() + 1);
    } else {
      return date.getFullYear() + '-' + toD(date.getMonth() + 1) + '-' +
        toD(date.getDate());
    }
  } else {
    return '';
  }
}

function tranDateToTime(time) {
  const date = new Date(time);
  return date.getTime();
}

function json2url(data) {
  let str = '';
  for (const name in data) {
    str += name + '=' + encodeURIComponent(data[name]) + '&';
  }
  return str;
}

function getStyle(obj, name) {        /* 获取样式函数*/
  return obj.currentStyle ?
    obj.currentStyle[name] :
    getComputedStyle(obj, false)[name];
}

function getTop(dom) {
  let dis = 0;
  while (dom.offsetParent != null) {
    let bW = getStyle(dom, 'borderWidth');
    bW = bW === '' ? 0 : parseInt(bW);
    dis += dom.offsetTop + bW;
    dom = dom.offsetParent;
  }
  return dis;
}

function calcuTop(arr, nav, nParent) {
  let count = 0;

  if (nParent) {
    count += arr[1];
    for (let i = 0; i < arr[0]; i++) {
      count += nav[i].children.length;
    }
  } else {
    if (arr.length > 1) {
      count += arr[1] + 1;
    }
    for (let i = 0; i < arr[0]; i++) {
      if (nav[i].children) {
        count += nav[i].children.length + 1;
      } else {
        count += 1;
      }
    }
  }
  return count;
}

function lateMonth(time, num) {
  const oDate = new Date(time);
  oDate.setMonth(oDate.getMonth() + num);
  return oDate.getTime();
}

function lateDate(time, num) {
  const oDate = new Date(time);
  oDate.setDate(oDate.getDate() + num);
  return tranTime(oDate);
}

function calcuYear(oldTime, newTime) {
  if (newTime.getTime() > oldTime.getTime()) {
    const diff = newTime.getTime() - oldTime.getTime();
    return (diff / (365 * 24 * 3600 * 1000)) === 0 ?
      0 :
      (diff / (365 * 24 * 3600 * 1000)).toFixed(2);
  } else {
    return 0;
  }
}

function tranDepartment(item) {
  if (item.superName === null) {
    return item.name;
  } else {
    return item.superName + ' - ' + item.name;
  }
}

function addWheel(obj, fn) {      /* obj为滚动的区域*/
  function fnWheel(ev) {
    const oEvent = ev || event;
    let down = false;
    /* 2判断滚轮方向*/

    if (oEvent.wheelDelta) {      /* 下*/
      if (oEvent.wheelDelta < 0) {
        down = true;
      } else {
        down = false;
      }
    } else {
      if (oEvent.detail > 0) {        /* 下*/
        down = true;
      } else {
        down = false;
      }
    }

    fn(oEvent, down);
    /* 3根据方向down干事儿*/
  }

  /* 1.滚轮事件兼容*/
  obj.onmousewheel = fnWheel;
  /* IE chrome*/
  if (obj.addEventListener) {
    obj.addEventListener('DOMMouseScroll', fnWheel, false);
  }
  /* FF*/
}

function ajax(obj) {
  const url = obj.url;
  const type = obj.type;
  // const data = Object.assign({}, obj.data)
  const data = obj.nObject ? obj.data : Object.assign({}, obj.data);
  const uploadFile = obj.uploadFile || false;
  console.log('uploadFile', uploadFile);

  if (type === 'post') {
    if (uploadFile) {
      console.log('1112222');
      debugger;
      return axios.post(url, obj.data, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        withCredentials: true
      }).then(res => res.status === 200 ? res.data : console.log(res));
    } else {
      return axios.post(url, {
        params: JSON.stringify(data)
      }, {
        transformRequest: [json2url],
        withCredentials: true
      }).then(res => res.status === 200 ? res.data : console.log(res));
    }
  } else {
    return axios.get(url, {
      params: data
    }).then(res => res.status === 200 ? res.data : console.log(res));
  }
}

function returnBack() {
  location.href = document.referrer === '' ? '/people.html' : document.referrer;
}

function indexByKey(value, arr = []) {
  let index = -1;
  arr.forEach((el, i) => {
    if (el.key === value) {
      index = i;
    }
  });
  return index;
}

function date2Stamp(newObj = {}, oldObj) {
  for (const key in oldObj) {
    if (oldObj[key] instanceof Date) {
      newObj[key] = oldObj[key].getTime();
    }
  }
  return newObj;
}

function nameByEmail(str) {
  if (str == null || str === '') {
    return '';
  } else {
    return str.split('@')[0];
  }
}

function nameByKey(key, arr) {
  // console.log(key)
  // console.log(arr)
  if (!arr) return;
  let name = '';
  arr.forEach(el => {
    if (el.key === key) {
      name = el.value;
    }
  });
  // console.log(name)
  return name;
}

function searchSuffix(val) {
  if (val === '' || val === null || val === undefined) {
    return '';
  } else {
    return ' ' + val;
  }
}

const beforeToday = {
  disabledDate(time) {
    return time.getTime() > Date.now();
  }
};

function arrIn(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true
    }
  }
  return false
}

function getLatelyDate(type) {
  const date = new Date();
  let targetDate = '';
  if (type === 'last') { // 昨天的时间
    date.setTime(date.getTime()-24*60*60*1000);
    targetDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
  } else if (type === 'next') { // 明天的时间
    date.setTime(date.getTime()+24*60*60*1000);
    targetDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
  } else { // 今天的时间
    date.setTime(date.getTime());
    targetDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
  }
  return targetDate;
}

function exitFullScreen () { // 退出全屏
  if (document.exitFullscreen) { // W3C标准
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) { // FireFox浏览器
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) { // 谷歌
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) { // ie
    document.msExitFullscreen()
  }
}

function openFullScreen () { // 开启全屏
  let doc = document.documentElement
  if (doc.requestFullscreen) { // W3C标准
    doc.requestFullscreen()
  } else if (doc.mozRequestFullScreen) { // FireFox浏览器
    doc.mozRequestFullScreen()
  } else if (doc.webkitRequestFullScreen) { // 谷歌
    doc.webkitRequestFullScreen()
  } else if (doc.msRequestFullscreen) { // ie
    doc.msRequestFullscreen()
  }
}


export {
  tranTime,
  tranDateToTime,
  json2url,
  getTop,
  getStyle,
  calcuTop,
  lateMonth,
  lateDate,
  calcuYear,
  tranDepartment,
  addWheel,
  ajax,
  returnBack,
  indexByKey,
  date2Stamp,
  nameByEmail,
  beforeToday,
  nameByKey,
  searchSuffix,
  arrIn,
  getLatelyDate,
  exitFullScreen,
  openFullScreen
};
