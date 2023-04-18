// Check Readme.md file
function createDict(keys, values) {
    const obj = {}

    keys.forEach((key, index) => obj[key] = values[index] ?? null)

    return obj
}