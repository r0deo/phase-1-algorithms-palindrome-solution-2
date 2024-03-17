function isPalindrome(word) {
  // Write your algorithm here

   const cleandWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

   const reverse = cleandWord.split('').reverse().join('');

   return cleandWord === reverse;
    
 

}

const result1 = isPalindrome("lalal");
console.log(result1); // Output: true

const result2 = isPalindrome("hello");
console.log(result2); // Output: false

/* 
  Add your pseudocode here
  .iterate over on the given word
  .check if it's can read from beginning and from ending 
    .false if it is not 
  .return that word
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
