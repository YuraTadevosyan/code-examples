// Check Readme.md file

function solution(input, markers) {
    const inputLines = input.split('\n')

    const outputArray = inputLines.map(el => {
        if (!markers.some(elem => el.includes(elem))) return el

        const index = el.split('').findIndex(elem => markers.includes(elem))
        return el.slice(0, index).trim()
    })

    return outputArray.join('\n')
};