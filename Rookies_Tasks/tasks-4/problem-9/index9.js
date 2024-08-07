function minmumNumber(n, arr1) {
  
  if (arr1.includes(1)) {
      return -1;
  }

  var arrMinNumber = Math.min(...arr1);
  
  return arrMinNumber;
}


var n = 5; 
var arr1 = [1, 2, 3, 4, 5]; 

console.log(minmumNumber(n, arr1)); 
