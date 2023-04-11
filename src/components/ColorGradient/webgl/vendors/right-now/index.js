module.exports =
  window.performance &&
    window.performance.now ? function now() {
      return performance.now()
    } : Date.now || function now() {
      return +new Date
    }
