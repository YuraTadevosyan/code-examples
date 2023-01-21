// Check Readme.ms file
const sort = (num) => num.toString().split('').sort((a, b) => a - b ).join('')

function findLowestInt(k) {
    let isValid = true
    let n = 0

    while(isValid) {
        n++;
        if(sort(k * n) === sort((k + 1) * n)) isValid = false
    }

    return n
}
