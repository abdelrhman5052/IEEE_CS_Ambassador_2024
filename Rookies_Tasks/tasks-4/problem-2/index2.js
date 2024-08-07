function pangram(n,string) {

  string = string.toLowerCase();

  var saveWord = new Set();

  for (var i = 0; i < n ; i++) {
  saveWord.add(string[i]);
  }

  if (saveWord.size === 26) {
  console.log("yes");
  } else {
    console.log("No");
  }


  
}

var n = parseInt(prompt("enter the number of charcters:  "))
var string = prompt("enter the string : ")

pangram(n, string);