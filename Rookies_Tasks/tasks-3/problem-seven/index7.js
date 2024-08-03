function handel(x) {
  if (x % 2 === 0) {
      
      console.log(x / 2);  
      console.log('2 '.repeat(x / 2).trim()); 
  } else {
    
      console.log(Math.floor(x / 2));  
      console.log('3 ' + '2 '.repeat((x - 3) / 2).trim()); 
  }
}


let  x = 6;
handel(x);    // 3
             // 2 2 2
