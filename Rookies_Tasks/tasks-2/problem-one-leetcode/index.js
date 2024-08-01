// method one 

function change(arr) {
  arr =  [17,18,5,4,6,1] ;

    let rightIndexMax = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
      newMax = Math.max(arr[i], rightIndexMax);
      arr[i] = rightIndexMax;
      rightIndexMax = newMax;
    }

    return arr
}

let OutPut1 = change();

console.log(OutPut1);


//Output: [18,6,6,6,1,-1]


// ---------------------------

// method two
function change2(arr2) {
  arr2 =  [400];

    let rightIndexMax = -1;

    for (let i = arr2.length - 1; i >= 0; i--) {
      newMax = Math.max(arr2[i], rightIndexMax);
      arr2[i] = rightIndexMax;
      rightIndexMax = newMax;
    }

    return arr2
}

let OutPut = change2();

console.log(OutPut);

//Output: [-1]