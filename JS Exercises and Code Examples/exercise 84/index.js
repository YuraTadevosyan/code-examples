// Check Readme.md file
const array = (string) => string.split(',').length <= 2 ? null : string.split(',').slice(1, -1).join(' ')