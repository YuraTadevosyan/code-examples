// Check Readme.ms file
const sum = (num, initial) => num.toString().split('').reduce((acc, cur) => +acc + +cur,initial)

function digitalRoot(n) {
    let res = 0
    res += sum(n, res)

    if (res > 9) return digitalRoot(res)

    return res
}
