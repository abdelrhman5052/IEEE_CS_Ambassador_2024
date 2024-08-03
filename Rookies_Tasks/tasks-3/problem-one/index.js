

function getData() {
  let row = parseInt(prompt("ضع عدد الصفووف"));
  let col = parseInt(prompt("ضع عدد الاعمده"));
  let data = [];
  for (let i = 0; i < row; i++) {
    data.push(prompt(`يكون كابيتال [ S ] أدخل الصف يجب حرف ${i + 1}:`));
  }
  return { row, col, data };
}

function handleCake() {
  let { row, col, data } = getData(); 
  let arr1 = new Array(row).fill(0);
  let arr2 = new Array(col).fill(0);

  for (let i = 0; i < row; i++) {
      let line = data[i]; 

      for (let j = 0; j < col; j++) { 
          if (line[j] === "S") { 
              arr1[i] = 1; 
              arr2[j] = 1; 
          }
      }
  }

  let cake = 0; 

  for (let i = 0; i < row; i++) {

      for (let j = 0; j < col; j++) { 

          if (arr1[i] === 0 || arr2[j] === 0) { 

            cake++; 
          }
      }
  }

  alert(`عدد الخلايا التي يمكن أكلها: ${ca}`); 
}

handleCake(); 
