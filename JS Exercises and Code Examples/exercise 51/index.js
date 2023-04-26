// Check Readme.md file
const convertHashToArray = (hash) => Object.keys(hash).sort().map(key => [key, hash[key]])
