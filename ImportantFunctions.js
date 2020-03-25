// =========================
// CENTURY FROM YEAR
// =========================
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  // Math.ceil rounds an integer to the nearest whole number. This function divides the given year by 100, then rounds the answer to the nearest whole number. I.e. 1992/100 = 19.92 ==> 20th century. 
  return Math.ceil(year/100)
}

// =========================
// CHECK PALINDROME
// =========================
// Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
    // var RegEx looks for anything that is not an upper case letter, lower case letter, or number.
    var RegEx =  /[^A-Za-z0–9]/g;
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
    for(var i=0;i<inputArray.length-1;i++){
        // If the current index times the next index is greater than cb, make cb's value equal to that equation. The next equation will then be compared to the previous one/new cb.
        if(inputArray[i]*inputArray[i+1] > cb){
          cb = inputArray[i]*inputArray[i+1];
        }
    }
  return cb;
}

