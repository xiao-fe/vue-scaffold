import Vue from 'vue'
import Router from 'vue-router'
import routes from './route';

Vue.use(Router)

const router = new Router({
  routes: routes
});

/**
 * 不做权限校验的路由前缀
 * @type {[*]}
 */
const unCheckRoutesPrefix = ['/404', '/500', '/forbid', '/lose', '/netless', '/login', '/home']
/**
 * 不做权限校验的路由后缀
 * @type {Array}
 */
const unCheckRoutesSuffix = ['/noauth']

/**
 * 拦截路由跳转,校验用户的路由权限,或者做流量监控
 */
router.beforeEach(function (to, from, next) {
  // 校验路由前缀格式,是否略过权限校验
  for (let i in unCheckRoutesPrefix) {
    if (to.path.startsWith(unCheckRoutesPrefix[i])) {
      next()
      break
    }
  }
  // 校验路由后缀格式,是否略过权限校验
  for (let i in unCheckRoutesSuffix) {
    if (to.path.endsWith(unCheckRoutesSuffix[i])) {
      next()
      break
    }
  }

  // 登录后一定时间内无需再次登录
  const storage = window.localStorage;
  const djlfticket = storage.djlfticket;
  const djlfticketsign = storage.djlfticketsign;
  if (djlfticket && djlfticketsign) {
    next('/home');
  } else {
    next(`/login?path=${to.path}`);
  }

  // 校验登录用户的路由权限
  // verifyRouter({projectCode: 'bi_databus', feRouter: to.path}).then(res => {
  //   if (res.data) next()
  // }).catch(error => {
  //   this.handleError(error)
  // })
  next()
});

export default router;
