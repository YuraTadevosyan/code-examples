// Check Readme.md file
const toCapitalize = (s) => s.replace(/^./, s[0].toUpperCase())

const bandNameGenerator = (str) => str.toLowerCase().at(0) === str.toLowerCase().at(-1) ? `${toCapitalize(str)}${str.slice(1)}` : `The ${toCapitalize(str)}`
