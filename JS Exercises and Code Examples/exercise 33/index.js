// Check Readme.md file
function order(words) {
    return words.split(' ').sort((a, b)=> a.replace(/\D/g,'') - b.replace(/\D/g,'')).join(' ')
}