// Check Readme.md file
const sequenceSum = (begin, end, step) => {
  let num = 0;

  for (let i = begin; i <= end; i += step) num += i;

  return num;
};