export const callFns = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args))
}
