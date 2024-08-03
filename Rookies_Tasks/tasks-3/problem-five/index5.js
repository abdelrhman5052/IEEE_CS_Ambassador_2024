function FridgeOpens(T, inFridge) {

  let results = [];

  for (let t = 0; t < T; t++) {
    
      let [n, k] = inFridge[t][0];
      let ingredients = inFridge[t][1];
      let fridge = new Set();
      let openCount = 0;

      for (let i = 0; i < n; i++) {

          let ingredient = ingredients[i];


          if (!fridge.has(ingredient)) {
              if (fridge.size === k) {
                  fridge.delete([...fridge][0]); 
              }
              fridge.add(ingredient);
              openCount++;
          }
      }


      results.push(openCount);
  }

  return results;
}


let T = 2;
let inFridge = [
  [[5, 3], [2, 4, 5, 2, 1]],
  [[7, 3], [1, 2, 3, 4, 3, 2, 1]],
];

console.log(FridgeOpens(T, inFridge)); // [4, 5]
