// Check Readme.md file

let moveZeros = function (arr) {
    return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));
}