// Check Readme.ms file
const chars = { 'a': 4, 'e': 3, 'l': 1 };

const nerdify = (txt) => txt.replace(/[AaEel]/g, m => chars[m.toLowerCase()]);
