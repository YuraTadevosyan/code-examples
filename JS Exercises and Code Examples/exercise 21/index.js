// Check Readme.ms file

function removeZeros(array) {
    for(let j = 0; j < getZeroCount(array); j++) {
        for(let i = 0; i < array.length; i++) {
            if(i < array.length - 1) {
                const el1 = array[i];
                const el2 = array[i+1];

                if((el1 === 0 || el1 === '0') && el2 !== 0 && el2 !== '0') {
                    array[i+1] = el1;
                    array[i] = el2;
                }
            }
        }
    }
    return array
}

function getZeroCount(array) {
    let count = 0;

    for(arr of array) {
        if(arr == 0) count++
    }

    return count;
}