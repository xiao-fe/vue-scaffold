/**
 * Created by yuliang on 2018/6/27 14:51
 */


function throttle(func, delay) {
  let timer = null;
  let startTime = Date.now();

  return function(...args) {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);
    const context = this;
    // const args = arguments;

    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  };
}

export default throttle;
