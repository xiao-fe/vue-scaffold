import {userAuthUrls} from '../api/login';
import {mockPost} from '../../../assets/js/mockRequest';

const LoginUsers = [
  {
    name: '吕某某',
    email: '24534534@qq.com',
    userName: 'admin',
    password: '123456',
    token: '43e3ec99-c8a3-47ec-afd7-775b7c073285'
  }
]

export default {
  /**
   * mock bootstrap
   */
  bootstrap (mock) {
    mockPost(mock, '登录', userAuthUrls.login, function (params) {
      let {userName, password} = params;
      let user = null
      let msg = '请求成功'
      let hasUser = LoginUsers.some(u => {
        if (u.userName !== userName || u.password !== password) {
          msg = '账号或密码错误'
          return false
        }
        user = u
        return true
      })
      if (hasUser) {
        return user
      } else {
        return { code: 100, msg: msg, result: {} }
      }
    })

    mockPost(mock, '登出', userAuthUrls.logout, function (params) {
      return true
    })

    mockPost(mock, '检查用户单个路由权限', userAuthUrls.checkPageRouter, function (params) {
      return true
    })
  }
}
