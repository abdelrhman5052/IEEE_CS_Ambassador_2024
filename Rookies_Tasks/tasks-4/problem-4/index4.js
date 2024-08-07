function handle (n , k , scores) {
var degryScore = scores[k - 1];

return scores.filter(score => score >= degryScore && score > 0).length;
}

var n = 4 ;
var k = 2;

var scores = [0 ,0 ,0,0];

console.log(handle(n, k , scores))


