// Check Readme.md file

const vowels = ['a', 'e', 'i', 'o', 'u']

const vowelOne = (s) => s.split('').map(el => +vowels.includes(el.toLowerCase())).join('')
