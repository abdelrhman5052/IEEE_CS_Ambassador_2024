function HandelMoonCycle(countDay, arr) {
  let moonCycle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
  let UpOrDown  = null;
  

        for (let i = 1; i < countDay; i++) {
      if (arr[i] > arr[i - 1]) {
        UpOrDown = UpOrDown === 'DOWN' ? -1 : 'UP';
      } else if (arr[i] < arr[i - 1]) {
        UpOrDown = UpOrDown === 'UP' ? -1 : 'DOWN';
         }
  }

     
  let  lastValue = arr[countDay - 1];
     let  nextValue = moonCycle[(moonCycle.indexOf(lastValue) + 1) % moonCycle.length];

  
  if (UpOrDown === 'UP') {
      return nextValue > lastValue ? 'UP' : 'DOWN';
  } else if (UpOrDown === 'DOWN') {
      return nextValue < lastValue ? 'DOWN' : 'UP';
  } else {
      return -1;
  }
}

    
let  countDay = 5;

let arr = [3, 4, 5, 6, 7];

console.log(HandelMoonCycle(countDay, arr)); 

