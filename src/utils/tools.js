/**
 * 时间转换
 * @param  {any} time 时间。必填，支持时间戳、Date 实例、符合时间的字符串（如 '2018-10-10'）
 * @param  {string} type 类型。可选，默认不填则精确到日。取值 'year'、'month'、'timestamp'、'timestamp-unix'、'timestamp-mysql'。
 */
function tranTime (time, type) {
  let date = new Date(time)
  if (Object.prototype.toString.call(date) !== '[object Date]' || date.toString() === 'Invalid Date') {
    return ''
  }
  // 年
  if (type === 'year') {
    return date.getFullYear()
  }
  // 月
  if (type === 'month') {
    return date.getFullYear() + '-' + toD(date.getMonth() + 1)
  }
  // 13 位时间戳
  if (type === 'timestamp') {
    return date.getTime()
  }
  // 10 位时间戳
  if (type === 'timestamp-unix') {
    return Math.round(date.getTime() / 1000)
  }
  // 数据库中的 timestamp
  if (type === 'timestamp-mysql') {
    return date.getFullYear() + '-' + toD(date.getMonth() + 1) + '-' + toD(date.getDate()) + ' ' + date.toTimeString().slice(0, 8)
  }
  if (type === 'md-chinese') {
    return toD(date.getMonth() + 1) + '月' + toD(date.getDate()) + '日'
  }
  // 默认返回到日
  return date.getFullYear() + '-' + toD(date.getMonth() + 1) + '-' + toD(date.getDate())
}

function toD (num) {
  return num < 10 ? '0' + num : '' + num
}

/**
 * 函数防抖
 * @param  {function} fn 目标函数
 * @param  {number} wait 防抖时间
 * @param  {boolean} immediate 是否立即执行，若为 true ,则在防抖时间前执行
 */
function debounce(fn, wait, immediate) {
  let timer, res
  let debounced = function (...args) {
    let that = this
    clearTimeout(timer)
    if (immediate) {
      if (!timer) {
        res = fn.apply(that, args)
      }
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn.apply(that, args)
      }, wait)
    }
    return res // immediate 为 true 才有用
  }
  debounced.cancel = function () { // immediate 为 true 才有用
    clearTimeout(timer)
    timer = null
  }
  return debounced
}

function changeDateFormat(time) {
  if (time.length === 10) time = Number(time) * 1000;
  let now = new Date(time);
  let year = now.getFullYear(); // 得到年份
  let month = now.getMonth(); // 得到月份
  let date = now.getDate(); // 得到日期
  let hour = now.getHours(); // 得到小时
  let minu = now.getMinutes(); // 得到分钟
  let sec = now.getSeconds();// 得到秒
  month = month + 1;
  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  if (hour < 10) hour = "0" + hour;
  if (minu < 10) minu = "0" + minu;
  if (sec < 10) sec = "0" + sec;
  return `${year}-${month}-${date} ${hour}:${minu}:${sec}`;
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
  debounce,
  changeDateFormat,
  exitFullScreen,
  openFullScreen
}
