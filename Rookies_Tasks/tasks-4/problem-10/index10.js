



function handleOn(a, b) {


  while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

function local(a, b) {


  return (a * b) / handleOn(a, b);

}

function handle(n, m, z) {
  
  var localval = local(n, m);

  return Math.floor(z / localval);
}


var  n = 1; 

var   m = 1; 
var   z = 10;

console.log(handle(n, m, z));
