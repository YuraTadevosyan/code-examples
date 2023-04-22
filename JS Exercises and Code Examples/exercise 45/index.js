// Check Readme.md file
const sumOfIntegersInString = (s) => s.replace(/\D/g, ' ').trim().split(' ').reduce((acc, cur) => acc + +cur, 0)

