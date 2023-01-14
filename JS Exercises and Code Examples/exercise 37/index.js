// Check Readme.ms file
const number = (busStops) => busStops.flat().reduce((prev, cur, curIndex) => prev + cur * (curIndex % 2 === 0 ? 1 : -1))
