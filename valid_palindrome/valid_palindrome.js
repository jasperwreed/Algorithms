// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

 /**
  * 
  * @param {string} s
  * @return {boolean} 
  */

const isPalindrome = (s) => {
  // creating a string of ONLY lowercase a-z characters
  let forward = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
  // comparing forward with reversed version & returning true if boolean === true
  if(forward === forward.split('').reverse().join('')) return true
  // returning false if above boolean is false
  return false
};