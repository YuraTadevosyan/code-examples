// Check Readme.md file
const pigIt = (str) => str.split(' ').map(el => /[.,!:?]/g.test(el) ? el : `${el.slice(1)}${el[0]}ay`).join(' ')