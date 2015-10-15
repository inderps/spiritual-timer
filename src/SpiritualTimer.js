export default class SpiritualTimer {

  static setTimeout(method, time) {
    const startingTime = (new Date()).getTime();
    return setTimeout(() => {
      method((new Date()).getTime() - startingTime);
    }, time);
  }
}