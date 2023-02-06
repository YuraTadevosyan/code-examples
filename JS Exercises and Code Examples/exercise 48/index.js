// Check Readme.ms file
const largest = (n, array) => array.sort((a, b) => a - b).filter((el, index, arr) => index >= arr.length - n);
