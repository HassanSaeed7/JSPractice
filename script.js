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
  while (num > 0) { //this increments down from num until it reaches 0
    repVar += str //this adds the str to the new variable while the loop condition remains true
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
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Code Explanation
//Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensure that neither arr or arr2 have been mutated.

// Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.

// Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.

// We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.

// Finally, we return the localArray and end the function.











// Call Function
  const output = reverseString('hello');
  
  console.log(output);