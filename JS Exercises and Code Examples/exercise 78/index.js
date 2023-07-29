// Check Readme.md file
function to24hourtime(hour, minute, period) {
  let hours
  let minutes = `${minute < 10 ? `0${minute}` : minute}`

  hours = `${period === 'pm' ? hour + 12 : hour < 10 ? `0${hour}` : hour}`

  if (hour === 12 && period === 'am') {
    hours = '00'
  }

  if (hour === 12 && period === 'pm') {
    hours = '12'
  }

  return hours + minutes;
}