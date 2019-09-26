const cookieTokenKey = 'bdap_token';

const sessionUserKey = 'userInfo';

/**
 * 添加cookie
 * @param name
 * @param value
 * @param expireHours 有效时间,单位小时,为0
 */
function addCookie (name, value, expireHours) {
  let cookieString = name + '=' + value
  // 判断是否设置过期时间
  if (expireHours > 0) {
    let date = new Date()
    date.setTime(date.getTime + expireHours * 3600 * 1000)
    cookieString = cookieString + '; expires=' + date.toGMTString()
  }
  document.cookie = cookieString
}

export {addCookie}

/**
 * 获取cookie
 * @param name
 * @returns {*}
 */
function getCookie (name) {
  let strCookie = document.cookie
  let arrCookie = strCookie.split('; ')
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split('=')
    if (arr[0] === name) return arr[1]
  }
  return ''
}

export {getCookie}

/**
 * 删除cookie, 即把value设置为空
 * @param name
 */
function deleteCookie (name) {
  let date = new Date()
  date.setTime(date.getTime() - 10000)
  document.cookie = name + '=v; expires=' + date.toGMTString()
}

export {deleteCookie}

/**
 * 获取cookie中的token
 * @returns {*}
 */
function getTokenCookie () {
  return getCookie(cookieTokenKey)
}

export {getTokenCookie}

/**
 * 删除cookie中的token
 */
function removeTokenCookie () {
  deleteCookie(cookieTokenKey)
}

export {removeTokenCookie}

/**
 * 将登录用户放到sessionStorage中
 * @param user
 */
function setLoginUser (user) {
  localStorage.setItem(sessionUserKey, JSON.stringify(user))
  addCookie(cookieTokenKey, user.token, 24)
}
export {setLoginUser}

/**
 * 移除sessionStorage中的登录用户
 */
function removeLoginUser () {
  localStorage.removeItem(sessionUserKey)
  deleteCookie(cookieTokenKey)
}
export {removeLoginUser}

/**
 * 获取登录用户信息
 */
function getLoginUser () {
  return JSON.parse(localStorage.getItem(sessionUserKey))
}
export {getLoginUser}
