// Example one

function palindrome(a) {

  a = "A man, a plan, a canal: Panama";

a = a.replace(/\W+/g, "").toLowerCase();
return a === a.split("").reverse().join("");

}


console.log(palindrome());

if (palindrome() === true) {
  console.log(`Explanation: is a palindrome`);
}


// ---------------------------------

// Example two

function palindrome2(s) {

  s = "race a car";

s = s.replace(/\W+/g, "").toLowerCase();
return s === s.split("").reverse().join("");

}


console.log(palindrome2());

if (palindrome2() === true) {
  console.log(`Explanation: is a palindrome`);
} else {
  console.log(`Explanation: is not a palindrome`);
}


// ------------------------------------------


// Example three

function palindrome3(d) {
  d = " ";

d = d.replace(/\W+/g, "").toLowerCase();
return d === d.split("").reverse().join("");

}


console.log(palindrome3());


if (palindrome3() === true) {
  console.log(`Explanation: is a palindrome`);
} else {
  console.log(`Explanation: is not a palindrome`);
}


