function handleMove(move) {
  var row =0; 
  var col =0;

  for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (move[i][j] === 1) {
          row = i ;
          col = j;
          break;
        }
      }
  }

  return Math.abs(row - 2) + Math.abs(col - 2);

}


var move = [
  [0,0,0,0,0],
  [0,0,0,0,1],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

console.log(handleMove(move));