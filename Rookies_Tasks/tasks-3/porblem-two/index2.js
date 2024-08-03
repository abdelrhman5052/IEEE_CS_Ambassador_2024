function handleTheRoad(n, inputs) {
  
    let h = Array(n).fill(0);
  let  v = Array(n).fill(0);
  
   let  results= [];

  for (let i = 0; i < n * n; i++) {
      let  [a, b] = inputs[i];

      if (h[a - 1] === 0 && v[b - 1] === 0) {
          results.push(i + 1); 
          h[a - 1] = 1;
          v[b - 1] = 1;
      }
  }

  console.log(results.join(' '));
}


let  n = 2;

let  inputs = [
  [1, 1],
  [1, 2],
  [2, 1],
  [2, 2]
];

handleTheRoad(n, inputs);
