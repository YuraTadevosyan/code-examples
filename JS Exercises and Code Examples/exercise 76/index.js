// Check Readme.md file
function toDayOfYear(arr) {
  const firstDayOfYear = new Date([1, 1, arr[2]]);
  const dayOfYear = new Date(arr.reverse());
  return (dayOfYear - firstDayOfYear) / 86400000 + 1
}