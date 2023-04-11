// Check Readme.md file

function isPrime(num) {
    if (num <= 1) {
        return false;
    } else if (num == 2) {
        return true;
    }

    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}