export function date(props, propName, componentName) {
  if (Object.prototype.toString.call(props[propName]) !== "[object Date]"
    || isNaN(props[propName].getTime())) {
      return new Error('Validation failed!')
  }
}
