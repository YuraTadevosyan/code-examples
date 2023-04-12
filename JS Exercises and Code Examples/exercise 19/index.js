// Check Readme.md file

const numbers = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
const arabicNums = Object.values(numbers);
const romanNums = Object.keys(numbers);

class RomanNumeralsClass {

    toRoman(num) {
        if(arabicNums.indexOf(num) !== -1) {
            return romanNums[arabicNums.indexOf(num)]
        }

        let convertNum = ''

        for (let i in numbers ) {
            while ( num >= numbers[i] ) {
                convertNum += i;
                num -= numbers[i];
            }
        }

        return convertNum;
    }

    fromRoman(num) {
        if(romanNums.indexOf(num) !== -1) {
            return arabicNums[romanNums.indexOf(num)]
        }

        let convertNum = 0;

        for (let i = 0; i < num.length; i++) {
            const curr = numbers[num[i]];
            const next = numbers[num[i + 1]];
            (curr < next) ? (convertNum -= curr) : (convertNum += curr);
        }

        return convertNum;
    }
}

let RomanNumerals = new RomanNumeralsClass()