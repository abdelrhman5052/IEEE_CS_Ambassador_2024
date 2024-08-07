function maxNum (n , arr) {
  var sum = 0;
  var  minNum = Number.MAX_SAFE_INTEGER;

  for (var i = 0; i < n ; i++) {
    sum += arr[i];
    if (arr[i] % 2 !== 0 && arr[i] < minNum) {
      minNum = arr[i]
    }
  
  }

  if (sum % 2 !== 0) {
    sum -= minNum;
  }

  return sum
}

var n = 5
var arr = [999999999,999999999,999999999,999999999, 999999999]; 

console.log(maxNum(n , arr));