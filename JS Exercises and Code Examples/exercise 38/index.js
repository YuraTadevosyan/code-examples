// Check Readme.md file
function alphabet(ns) {
    let D;
    const CD = Math.max(...ns);

    for (let i = 2; i < Math.ceil(Math.sqrt(CD)); i++) {
        if (CD % i === 0 && ns.includes(i) && ns.includes(CD / i) && i < (CD / i)) {
            D = CD / i;
        }
    }

    return D;
}
