/**
 * 异常跳转模块
 */
import error404 from '../components/error/404.vue';
import error500 from '../components/error/500.vue';
import errorForbid from '../components/error/forbid.vue';
import errorLose from '../components/error/lose.vue';
import errorNetless from '../components/error/netless.vue';

/**
 * 框架模块
 */
const HeaderNav = () => import('../components/header-nav/index.vue');

/**
 * 页面模块
 */
// 登录
const Login = () => import('../page/login/Login.vue');
// 首页
const Home = () => import('../page/home/index.vue');

/**
 * 项目示例
 */
const HeaderMenu = () => import('../page/project-demo/header-menu-all/index.vue');
const Menu1_1 = () => import('../page/project-demo/header-menu-all/menu1-1.vue');
const Menu1_2 = () => import('../page/project-demo/header-menu-all/menu1-2.vue');
const Menu2 = () => import('../page/project-demo/header-menu-all/menu2.vue');
const HeaderOnly = () => import('../page/project-demo/header-only/index.vue');

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/404',
    name: '404',
    component: error404,
  },
  {
    path: '/500',
    name: '500',
    component: error500,
  },
  {
    path: '/forbid',
    name: 'forbid',
    component: errorForbid,
  },
  {
    path: '/lose',
    name: 'lose',
    component: errorLose,
  },
  {
    path: '/netless',
    name: 'netless',
    component: errorNetless,
  },
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  // 项目路由示例
  {
    path: '/',
    name: 'HeaderNav',
    component: HeaderNav,
    children: [
      {
        path: '/head-menu',
        name: 'HeaderMenu',
        meta: {path: '/menu/1'},
        component: HeaderMenu,
        children: [
          {path: '/menu/1', name: 'HeaderMenu', component: Menu1_1},
          {path: '/menu/2', name: 'HeaderMenu', component: Menu1_2},
          {path: '/menu2', name: 'HeaderMenu', component: Menu2}
        ]
      },
      {path: 'head-only', name: 'head-only', component: HeaderOnly}
    ]
  }
];

export default routes;
