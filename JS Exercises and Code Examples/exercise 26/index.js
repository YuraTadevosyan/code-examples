// Check Readme.md file
function squareDigits(num){
    return +num.toString().split('').map(el => Math.pow(el, 2)).join('')
}