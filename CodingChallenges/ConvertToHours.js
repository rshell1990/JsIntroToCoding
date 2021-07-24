function toHours(minutes) {
  let MinutesToHours = 60
  var hours = minutes / MinutesToHours
return hours
}

var minutes = prompt("Please provide the minutes that you would like converted to hours");
var result = toHours(minutes);
console.log(result)