// Check Readme.ms file
function solve(s){
    let upperCaseCount = 0
    let lowerCaseCount = 0
    let numbersCount = 0
    let charactersCaseCount = 0

    s.split('').forEach(el => {
        const charCodeAt = el.charCodeAt(0)
        if (charCodeAt >= 65 && charCodeAt <= 90) upperCaseCount++
        else if (charCodeAt >= 97 && charCodeAt <= 122) lowerCaseCount++
        else if (charCodeAt >= 48 && charCodeAt <= 57) numbersCount++
        else charactersCaseCount++
    })

    return [upperCaseCount, lowerCaseCount, numbersCount, charactersCaseCount]
}
