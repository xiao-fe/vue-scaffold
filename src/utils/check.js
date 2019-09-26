import reg from './reg'

/**
 * 手机号
 * @param  {boolean} isMust 是否必填.默认为 false
 */
function checkPhone (isMust = false, trigger = ['blur', 'change']) {
  return [
    {
      validator (rule, value, callback) {
        return phone(rule, value, callback, isMust)
      },
      trigger
    }
  ]
}

function phone (rule, value, callback, isMust) {
  if ((value + '').trim() === '') {
    if (isMust) {
      return callback('手机号不能为空！')
    } else {
      return callback()
    }
  }
  if (!reg.phone.test(value)) {
    return callback('手机号格式不正确！')
  }
  callback()
}

/**
 * 限制字数
 * @param  {number} max 最大字数
 * @param  {boolean} isMust 是否必填.默认为 false
 * @param  {} trigger 触发类型.默认为 ['blur','change']
 */
function checkLimitWord (max, isMust = false, trigger = ['blur', 'change']) {
  return [
    {
      validator (rule, value, callback) {
        return limitWord(rule, value, callback, max, isMust)
      },
      trigger
    }
  ]
}

function limitWord (rule, value, callback, max, isMust) {
  if (isMust) {
    if ((value + '').trim() === '') {
      return callback('不能为空！')
    } 
  }
  if (value.length > max) {
    return callback(`限制在 ${max} 字以内！`)
  }
  callback()
}

/**
 * 验证码
 */
function checkCaptcha (rule, value, callback) {
  if ((value + '').trim() === '') {
    return callback('验证码不能为空！')
  } 
  if (!reg.captcha.test(value)) {
    return callback('请输入 4 到 6 位数字！')
  }
  callback()
}

/**
 * 身份证号
 * @param  {boolean} isMust 是否必填.默认为 false
 */
function checkIdcard (isMust = false, trigger = ['blur', 'change']) {
  return [
    {
      validator (rule, value, callback) {
        return idcard(rule, value, callback, isMust)
      },
      trigger
    }
  ]
}

function idcard (rule, value, callback, isMust) {
  if ((value + '').trim() === '') {
    if (isMust) {
      return callback('身份证号不能为空！')
    } else {
      return callback()
    }
  }
  if (!reg.idcard.test(value)) {
    return callback('身份证号格式不正确！')
  }
  callback()
}



export {
  checkPhone,
  checkLimitWord,
  checkCaptcha,
  checkIdcard
}