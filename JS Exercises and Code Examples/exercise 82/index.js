// Check Readme.md file
const dropCap = (n) => n.split(' ').map(el => el.length > 2 ? `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}` : el).join(' ')