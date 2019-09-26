import VueGlobal from './vueGlobal';
import Component from '../../components'

const PComponents = {
  PSubmitCancel: Component.Button.SubmitCancel,
  PSmallSubmitCancel: Component.Button.SmallSubmitCancel,
}


// 注册全局方法和组件
export default {
  install(Vue) {
    // 消息提示
    Vue.prototype.$messageInfo = msg => {
      VueGlobal.messageInfo(msg);
    };
    Vue.prototype.$messageSuccess = msg => {
      VueGlobal.messageSuccess(msg);
    };
    Vue.prototype.$messageWarn = msg => {
      VueGlobal.messageWarn(msg);
    };
    Vue.prototype.$messageError = msg => {
      VueGlobal.messageError(msg);
    };

    // 通知提示
    Vue.prototype.$notifyInfo = msg => {
      VueGlobal.notifyInfo(msg);
    };
    Vue.prototype.$notifySuccess = msg => {
      VueGlobal.notifySuccess(msg);
    };
    Vue.prototype.$notifyWarn = msg => {
      VueGlobal.notifyWarn(msg);
    };
    Vue.prototype.$notifyError = msg => {
      VueGlobal.notifyError(msg);
    };

    // 弹框提示
    Vue.prototype.$alertInfo = msg => {
      VueGlobal.alertInfo(msg);
    };
    Vue.prototype.$alertSuccess = msg => {
      VueGlobal.alertSuccess(msg);
    };
    Vue.prototype.$alertWarn = msg => {
      VueGlobal.alertWarn(msg);
    };
    Vue.prototype.$alertError = msg => {
      VueGlobal.alertError(msg);
    };

    /**
     * loading
     * @param dom 要加loading的dom节点
     */
    Vue.prototype.$ploading = dom => {
      VueGlobal.loading(dom);
    };

    /**
     * 统一处理promise catch的错误
     * @param error 错误信息
     */
    Vue.prototype.$handleError = error => {
      VueGlobal.notifyError(error.message);
    };

    // 注册全局组件
    Object.keys(PComponents).forEach((key) => {
      Vue.component(key, PComponents[key])
    })
  },
};
