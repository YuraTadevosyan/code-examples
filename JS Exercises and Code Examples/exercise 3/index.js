// Check Readme.md file

function descendingOrder(n) {
    n += ''
    return +n.split('').sort((a,b)=> b - a).join('')
}
