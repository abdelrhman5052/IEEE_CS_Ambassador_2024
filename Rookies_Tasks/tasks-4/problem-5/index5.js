function handle (k , r ) {
  for (var n = 1; n <= 10; n++) {


  if ((n * k ) % 10 === 0 || (n * k) % 10 === r ) {
  return n ;
  }
  }

  return 10;
}


var k = 117 ; 
 var r = 3; 

 console.log(handle(k, r ));