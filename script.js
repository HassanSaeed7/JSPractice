// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
// The steps using a variable placeholder
function reverseString(str) {
  const arr = str.split("");
  arr.reverse();
  const string = arr.join("");
  return string;
}
reverseString("Let's Start");

//The CLEAN way to write it
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
reverseString("Let's Start");

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
//These don't always work, they are fast but don't account for random characters, uppercase/lowercase, and they just check words only
function palindrome(str) {
  let palin = str
    .split("")
    .reverse()
    .join("");
  if (str === palin) {
    return true;
  } else {
    return false;
  }
}
palindrome("racecar");

//Only checks a word, not a sentence.
function palindrome(str) {
  let palin = str
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return str === palin;
}
palindrome("Racecar");

//This palindrome checker returns a word or sentence.
function palindrome(str) {
  let regex = /[A-Za-z0-9]+/g;
  let palin = str
    .match(regex)
    .join("")
    .toLowerCase();
  return (
    palin ==
    palin
      .split("")
      .reverse()
      .join("")
  );
}
palindrome("racecar");

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const reverse1 = int
    .toString()
    .split("")
    .reverse()
    .join(""); //turns integer into string, split into array, reverse array, join aray.
  return parseInt(reverse1) * Math.sign(int); //returns string as integer and Math.sign() function returns the sign of the (int) that is passed into function
}
reverseInt(-12345);

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}

// CHALLENGE 7: REPEAT A STRING
//Repeat a given string str (first argument) for num times (second argument).
//Return an empty string if num is not a positive number.
//For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
  let repVar = ""; //Strings are immutable in JavaScript so we will need a new variable to store the truncated string.
  while (num > 0) {
    //this increments down from num until it reaches 0
    repVar += str; //this adds the str to the new variable while the loop condition remains true
    num--; //this increments the loop down to 0 so it exits the loop
  }
  return repVar; //we return the new variable instead of the string passed into fx
}
repeatStringNumTimes("abc", 3);

// CHALLENGE 7: TRUNCATE A STRING
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "..."; //.slice() will slice out what you index in ().
  } else {
    return str;
  }
}

// CHALLENGE 8: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method
// we would like you to use one of the JavaScript substring methods instead.
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");

//str.length minus target.length gives us the index of the string we want to slice (the last number is indexed 1 less due to 0-indexing)
// then we compare that sliced to the target
//Alternative: If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
confirmEnding("Bastian", "n");

// CHALLENGE 9: Boo who
//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.
function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}
booWho(null);

//  CHALLENGE 10: Slice and Splice
// You are given two arrays and an index.
//Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let container = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    container.splice(n, 0, arr1[i]);
    n++;
  }
  return container;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Code Explanation
//Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensure that neither arr or arr2 have been mutated.
// Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.
// Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.
// We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
// Finally, we return the localArray and end the function.

//If we want to use the spread operator to push the entire array all at once (instead of iterating through the array)
function frankenSplice(arr1, arr2, n) {
  let container = arr2.slice();
  container.splice(n, 0, ...arr1);
  return container;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Since our goal is to return the new array with out altering arr1 or arr2 we create a local variable and add all the items from arr2 using the slice() function
//Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into container.
//n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0.
//Then we add the entire contents of arr1 using spread syntax ....

//Convert Celsius to Fahrenheit
//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
convertToF(30);

//Falsy Bouncer
//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);

//using a for loop and an empty array, we push arr[i] after the if statement checks if the index is truthy.
// falsy statements are undefined, null, NaN, 0, “” (empty string), and false so it would result // [7, "ate", 9]
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
bouncer([7, "ate", "", false, 9]);

//Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); //sort through the array
  for (let i = 0; i < arr.length; i++) {
    //loop through the array, comparing num to each iteration of arr
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length; //this ensures that you return an index position instead of the array
}

getIndexToIns([40, 60], 50);
// First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
// Then I use a for loop to compare the items in the array starting from the smallest one.
// When an item on the array is greater than the number we are comparing against, then we return the index.

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length; //the .length ensures that you return an index position
}
// Count the number of entries that are smaller than the new value num
// The new value would be inserted after these values

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
function mutation(arr) {
  let arr0 = arr[0].toLowerCase(); //set the array items equal to a new variable and lowercase them.
  let arr1 = arr[1].toLowerCase();
  for (let i = 0; i < arr1.length; i++) {
    //run a for loop through the 2nd array's length
    if (arr0.indexOf(arr1[i]) < 0) return false; //if the indexOf returns a negative number, you know a value in arr1 don't match the value in arr0 and will return false.
  }
  return true; //otherwise, the letters in arr1 match those in arr0 and it returns true
}
mutation(["hello", "hey"]); //this would be false because there is no y in hello

// Call Function
const output = getIndexToIns(
  [1, 2, 3, 4, 86, 6, 5, 5, 6, 6, 5, 4, 3, 5, 6, 7, 5, 9],
  5
);

console.log(output);
