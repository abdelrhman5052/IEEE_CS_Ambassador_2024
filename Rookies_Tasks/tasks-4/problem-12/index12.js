function getMaxSocksOnTable(pairCount, sequence) {
  var socksOnTable = new Set(); 
  var maxSocks = 0;             

  for (var sock of sequence) {
             if (socksOnTable.has(sock)) {
         
                 socksOnTable.delete(sock);
             } else {
                 
                 socksOnTable.add(sock);
                 maxSocks = Math.max(maxSocks, socksOnTable.size);
             }
  }

  return maxSocks;
}

var   numberOfPairs = 3;
var sockOrder = [2, 1,1,3,2,3];


console.log(getMaxSocksOnTable(numberOfPairs, sockOrder)); 
