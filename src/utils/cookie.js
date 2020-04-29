/**
 * Created by yuliang on 2018/6/13 10:10
 */

// 创建cookie
function setCookie(name, value, expires, path, domain, secure) {
  let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  if (expires instanceof Date) {
    cookieText += '; expires=' + expires;
  }
  if (path) {
    cookieText += '; expires=' + expires;
  }
  if (domain) {
    cookieText += '; domain=' + domain;
  }
  if (secure) {
    cookieText += '; secure';
  }
  document.cookie = cookieText;
}

// 获取cookie
function getCookie(name) {
  const cookieName = encodeURIComponent(name) + '=';
  const cookieStart = document.cookie.indexOf(cookieName);
  let cookieValue = null;
  if (cookieStart > -1) {
    let cookieEnd = document.cookie.indexOf(';', cookieStart);
    if (cookieEnd === -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(
      document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
  }
  return cookieValue;
}

// 删除cookie
function unsetCookie(name) {
  document.cookie = name + '= ; expires=' + new Date(0);
}

export {setCookie, getCookie, unsetCookie};
