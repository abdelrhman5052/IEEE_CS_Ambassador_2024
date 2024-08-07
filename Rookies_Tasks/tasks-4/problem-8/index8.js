function findYears(year) {
  var  count = new Set(year.toString());
  return count.size === year.toString().length;
}

function NextOfYears(n) {
  var nextYear = n + 1;
  while (!findYears(nextYear)) {
      nextYear++;
  }
  return nextYear;
}



 var n = 1987; 
console.log(NextOfYears(n)); 
