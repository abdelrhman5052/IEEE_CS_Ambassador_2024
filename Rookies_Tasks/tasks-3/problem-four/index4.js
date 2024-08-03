


function RoundHouse(n, a, b) {
  return ((a + b - 1) % n + n) % n + 1;
}


console.log(RoundHouse(6, 2, -5)) // 3
console.log(RoundHouse(5, 1, 3)) // 4
console.log(RoundHouse(3, 2 , 7)); // 3

