// Check Readme.ms file

function rgb(r, g, b) {
    let str = '';
    [r,g,b].forEach(el => {
        if(toHex(el).length == 1) str += 0
        str += toHex(el)
    })

    return str;
}

function toHex (color) {
    color = color < 0 ? 0 : color;
    color = color > 255 ? 255 : color;
    return color.toString(16).toUpperCase()
}