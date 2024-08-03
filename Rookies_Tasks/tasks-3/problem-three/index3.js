

function salaryAndPriceAndBudget(prices, budgets) {
  
  prices.sort((a, b) => a - b);
  
  let res = [];

  
  function count(maxPr) {

      let left = 0 
      let right = prices.length - 1;

      while (left <= right) {

          let center = Math.floor((left + right) / 2);
          if (prices[center] <= maxPr) {
              left = center + 1;
          } else {
              right = center - 1;
          }

      }


      return left;
  }


  for (let budget of budgets) {
    res.push(count(budget));
  }

  return res;
}


let  input = `5
3 10 8 6 11
4
1
10
3
11`;


let p = input.trim().split("\n");
let n = parseInt(p[0], 10);
let prices = p[1].split(" ").map(Number);
let q = parseInt(p[2], 10);
let budgets = p.slice(3).map(Number);

let results2 = salaryAndPriceAndBudget(prices, budgets);

console.log(results2.join(" "));
