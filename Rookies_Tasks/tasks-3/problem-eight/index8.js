
function taketTotal(n, m , a , b ) {

   [n, m , a, b] = [6, 2, 1, 2];



  let taketPersonAlone = n * a;
  let totalSpecialTakets = Math.ceil(n / m);

  let oneTaketSpecial = totalSpecialTakets * b;

  let minTaket = Math.min(taketPersonAlone, oneTaketSpecial);

  return minTaket;


}


let result = taketTotal();

console.log(result)  // 6