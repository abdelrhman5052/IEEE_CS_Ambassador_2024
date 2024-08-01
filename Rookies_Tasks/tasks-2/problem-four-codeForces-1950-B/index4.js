


function Hash() {

    let table = parseInt(prompt("write number in input to create colums"));

    while (table > 0) {
        let c = parseInt(prompt("write number here"));

        let row1 = c * 2;
        let col1 = c * 2;

        let row2 = 0;
        let col2 = 0;

  let arr = new Array(row1).fill(null).map(() => new Array(col1).fill(" "));

        let Hash = "#";

        while (row2 < row1) {
            let start = Hash;

            while (col2 < col1) {
                if (start === "#") {
              arr[row2][col2] = "#";
              arr[row2][col2 + 1] = "#";
              arr[row2 + 1][col2] = "#";
              arr[row2 + 1][col2 + 1] = "#";
              start = ".";
          } else {

              arr[row2][col2] = ".";
              arr[row2][col2 + 1] = ".";
              arr[row2 + 1][col2] = ".";
              arr[row2 + 1][col2 + 1] = ".";
              start = "#";
          }

                col2 += 2;
            }

            Hash = Hash === "#" ? "." : "#";

            row2 += 2;
            col2 = 0;
        }

        for (let i = 0; i < arr.length; i++) {

            let rowStr = "";

            for (let j = 0; j < arr[0].length; j++) {

                rowStr += arr[i][j];
            }
            console.log(rowStr);
        }

        table--;
    }
}

Hash();
