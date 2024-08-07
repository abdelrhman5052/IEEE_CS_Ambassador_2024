function getWiningConfigrtion(res) {
  var dataLines = res.split('\n');
  var numberOfTests = parseInt(dataLines[0], 10);
    var possibleDimensions = [[1, 12], [2, 6], [3, 4], [4, 3], [6, 2], [12, 1]];


  var results = [];

  for (var testIndex = 1; testIndex <= numberOfTests; testIndex++) {
      var cardRow = dataLines[testIndex].trim();
      var winningDimensions = [];

      possibleDimensions.forEach(([numRows, numCols]) => {
                for (var col = 0; col < numCols; col++) {
              var isWinningColumn = true;
              for (var row = 0; row < numRows; row++) {
                  if (cardRow[row * numCols + col] !== 'X') {
                      isWinningColumn = false;
                      break;
                    }
              }
              if (isWinningColumn) {
     winningDimensions.push(`${numRows}x${numCols}`);
                  break;
              }
          }
      });

          results.push(`${winningDimensions.length} ${winningDimensions.join(' ')}`);
  }

       return results.join('\n');
}  

var res = `4
OXXXOXOOXOOX
OXOXOXOXOXOX
XXXXXXXXXXXX
OOOOOOOOOOOO`;

console.log(getWiningConfigrtion(res));
