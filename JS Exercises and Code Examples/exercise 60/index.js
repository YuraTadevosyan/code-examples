// Check Readme.ms file
String.prototype.camelCase = function () {
  return this.split(' ').map(el => el && el.replace(/^./, el[0].toUpperCase())).join('')
}
