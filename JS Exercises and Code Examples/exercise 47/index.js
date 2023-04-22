// Check Readme.md file
function numberJoy(n) {
    const sum = n.toString().split('').reduce((acc, cur) => +acc + +cur)
    const reversedSum = sum.toString().split('').reverse().join('')

    return n === sum * reversedSum
}
