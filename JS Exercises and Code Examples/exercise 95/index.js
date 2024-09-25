// Check Readme.md file
const vectorAffinity = (xs,ys) => {
    let matchesCount = 0

    if (xs.length > ys.length) {
        const zs = ys
        ys = xs
        xs = zs
    }

    xs.forEach((el, index) => {
        if (el === ys[index]) {
            matchesCount++
        }
    })

    if (matchesCount === ys.length) {
        return 1
    }

    return matchesCount / ys.length
}