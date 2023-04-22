// Check Readme.md file
function perfectSquare(string){
    const slashN = string.split('.').filter(Boolean);
    const dots = string.split('\n');

    if (slashN.length + 1 === dots[0].length && dots.every(el => el === dots[0])) return true;

    return false;
}
