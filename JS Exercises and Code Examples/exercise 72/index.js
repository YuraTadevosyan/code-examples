// Check Readme.md file
const spacey = (array) => array.map((el, index, arr) => arr.slice(0, index + 1).join(''));