import Vue from 'vue';
import App from './App';
import router from './router';
import './style/index.scss';
import store from './store';
import plugin from './assets/js/plugin';
import allFilter from './filter/index';

if (process.env.NODE_ENV === 'development') {
  // Mock.bootstrap()
}

// 全局方法和组件
Vue.use(plugin);

// 全局过滤器
allFilter()

import {
  Menu,
  Submenu,
  MenuItem,
  Input,
  Button,
  Select,
  Form,
  FormItem
} from 'element-ui';

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(FormItem);

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

export default vm;
