/**
 * Created by yuliang on 2018/5/8 10:59
 */

// 封装axios类库
// 1、统一处理报错，处理方式解耦
// 2、默认json 格式
// 3、添加拦截器，可以做权限，可以跟后端约定人性化提示
import axios from 'axios';
import * as deepmerge from 'deepmerge';

let option = {
  config: {
    timeout: 60 * 1000, // request timeout
    withCredentials: true
  },
  suc() {
  }, err() {
  }, beforeRequest() {
  }, beforeRequestErr() {
  }
};

if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = 'http://192.168.220.1:1234'
  // axios.defaults.baseURL = 'https://bdap-217.djtest.cn'
  axios.defaults.baseURL = 'http://10.37.31.239:3000/mock/131'
  // axios.defaults.baseURL = 'https://bdap.daojia-inc.com'
  // axios.defaults.baseURL = 'http://10.253.104.72:8088' // 后端服务
}

// create an axios instance
let instance = function() {
};

export function fetch(opt) {
  return instance(opt);
}

export function initFetch(op) {
  console.log('op', op);

  option = deepmerge(option, op);
  instance = axios.create(option.config);
  // request interceptor
  instance.interceptors.request.use(
    // Do something before request is sent
    config => {
      // console.log('before request is sent', option);
      // return config;
      config.headers['djlfticket'] = localStorage.djlfticket || '';
      config.headers['djlfticketsign'] = localStorage.djlfticketsign || '';
      const _BEFORE_REQUEST_CB = option.beforeRequest(config);
      return _BEFORE_REQUEST_CB ? _BEFORE_REQUEST_CB : config;
      // return Promise.reject(error);
    },
    // Do something with request error
    error => {
      // console.log('before request:::::', error);
      const _BEFORE_REQUEST_Err = option.beforeRequestErr();
      return _BEFORE_REQUEST_Err ? _BEFORE_REQUEST_CB : Promise.reject(error);
    }
  );

// respone interceptor
  instance.interceptors.response.use(
    response => {
      // return response.data;
      const _SUC_CB = option.suc(response.data, response);
      return _SUC_CB ? _SUC_CB : response.data;
    },
    error => {
      const _ERR_CB = option.err(error);
      return _ERR_CB ? _ERR_CB : Promise.reject(error);
    }
  );
}


