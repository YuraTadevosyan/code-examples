// Check Readme.md file

function alphanumeric(string) {
    if (string.length == 0) return false

    const regex = /^[a-zA-Z0-9]*$/

    return string.match(regex)

}
