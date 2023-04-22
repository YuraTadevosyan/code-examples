// Check Readme.md file
const epley = (w, r) => w * (1 + r / 30)
const mcglothin = (w, r) => 100 * w / (101.3 - 2.67123 * r)
const lombardi = (w, r) => w * Math.pow(r, 0.1)

const calculate1RM = (w, r)=> r === 1 ? w : r === 0 ? 0 : Math.round(Math.max(epley(w, r), mcglothin(w, r), lombardi(w, r)))
