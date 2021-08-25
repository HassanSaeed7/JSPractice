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
  console.log(reverseString("hello"));
  
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
  console.log(palindrome("racecar"));
  
  //Only checks a word, not a sentence.
  function palindrome(str) {
    let palin = str
      .toLowerCase()
      .split("")
      .reverse()
      .join("");
    return str === palin;
  }
  console.log(palindrome("Racecar"));
  
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
  console.log(palindrome("racecar"));
  
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
  console.log(reverseInt(-12345));
  
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
  
  // // Call Function
  // const output = reverseString('hello');
  
  // console.log(output);