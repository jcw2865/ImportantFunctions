// =========================
// CENTURY FROM YEAR
// =========================
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  // Math.ceil rounds an integer to the nearest whole number. This function divides the given year by 100, then rounds the answer to the nearest whole number. I.e. 1992/100 = 19.92 ==> 20th century. 
  return Math.ceil(year / 100)
}

// =========================
// CHECK PALINDROME
// =========================
// Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
  // var RegEx looks for anything that is not an upper case letter, lower case letter, or number.
  var RegEx = /[^A-Za-z0–9]/g;
  // var lowRegStr then puts the string into lower case, then replaces punctuation and spaces with an empty string (i.e. deletes them).
  var lowRegStr = inputString.toLowerCase().replace(RegEx, '');
  // var revStr takes a string, separates it into an array of letters from the string, reverses the order of the string, then re-joins them back into one string. 
  var revStr = lowRegStr.split('').reverse().join('');
  // Return revStr if it is equal to the given argument.
  return revStr === inputString;
}

// =========================
// ADJACENT ELEMENTS PRODUCT
// =========================
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {
  // In this case, cb's initial declaration is arbitrary because it is redeclared later. Number.NEGATIVE_INFINITY just represents the smallest possible number. 
  var cb = Number.NEGATIVE_INFINITY;
  // Loop through given array.
  for (var i = 0; i < inputArray.length - 1; i++) {
    // If the current index times the next index is greater than cb, make cb's value equal to that equation. The next equation will then be compared to the previous one/new cb.
    if (inputArray[i] * inputArray[i + 1] > cb) {
      cb = inputArray[i] * inputArray[i + 1];
    }
  }
  return cb;
}

// =========================
// SHAPE AREA
// =========================
// Determine the area of an interesting polygon for given 'n'. A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. Visuals can be found here https://medium.com/@josephcardillo/javascript-functions-for-dummies-me-part-3-b3e8b3cf8288 . 
function shapeArea(n) {
  return n * n + (n - 1) * (n - 1);
}

// =========================
// MAKE ARRAY CONSECUTIVE 2
// =========================
// Arrange a given array from smallest to largest so that each number will be bigger than the previous one exactly by 1. Return the number of additional numbers needed.
function makeArrayConsecutive2(statues) {
  // Math.max(...statues) takes the highest number in the statues array.
  // Math.min(...statues) takes the lowest number in the statues array.
  // The lowest is subtracted from the highest, and one is added (because in this scenario you can't have an array with no numbers)
  // The length of the array is then subtracted from that number.
  return Math.max(...statues) - Math.min(...statues) + 1 - statues.length

  // Example
  // statues = [10,3,2,20]
  // 20 — 2 = 18
  // 18 + 1 = 19
  // 19 - 4 = 15
}