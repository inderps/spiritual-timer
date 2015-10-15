export default class SpiritualTimer {

  static setTimeout(method, time) {
    return setTimeout(() => {
      method(time);
    }, time);
  }
}