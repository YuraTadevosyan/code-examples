// Check Readme.md file

function descendingOrder(n){
    n += '';
    let arr = n.split('');
    arr.sort((a,b)=>b-a);
    return +arr.join('');
}