// Check Readme.ms file
function tribonacci(signature,n) {
    if (!n) return []
    const arr = [...signature]
    if (n <= 3) return arr.slice(0, n)

    let i = arr.length

    while (arr.length < n) {
        arr.push(arr.slice(i - 3, i).reduce((acc, cur) => acc + cur, 0))
        i++
    }
    return arr
}
