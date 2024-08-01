


 function canBuildSquare(n, squares) {

  let  totalSquares = squares.reduce((a , b) => a + b, 0);
     let    squareSide = Math.sqrt(totalSquares);


     
    if (Number.isInteger(squareSide) && squareSide * squareSide === totalSquares) {
      return "yes";
  } else {
      return "no";
  } 
 
}

     
function handle() {
  let input = parseInt(prompt("write here"));

  for (let i = 0; i < input; i++) {

           let  n = parseInt(prompt("write the number of squared"));

       let  squares = prompt("write the squared spaces").split(" ").map(Number);

      let  result = canBuildSquare(n, squares);


      console.log(result);
  }
}

handle();


