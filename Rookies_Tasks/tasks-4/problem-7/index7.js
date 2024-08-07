function handle(n, Rat) {
  var rated = false;
  var maybe = true;

  for (var i = 0; i < n; i++) {
      var [ai, bi] = Rat[i];
      if (ai !== bi) {
          rated = true;
      }
      if (i < n - 1 && ai < Rat[i + 1][0]) {
          maybe = false;
      }
  }

  if (rated) {
      return "rated";
  } else if (maybe) {
      return "maybe";
  } else {
      return "unrated";
  }
}

var n = 6;
var  Rat = [
  [3060 , 3060 ],
  [2194 , 2194],
  [2876 , 2903],
  [2624 , 2624 ],
  [3007 , 2991],
  [2884 , 2884 ]
];
console.log(handle(n, Rat)); 
