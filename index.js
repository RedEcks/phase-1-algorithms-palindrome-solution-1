function stringReverse(word){
  //'abc'=>'cba'
  let wordStringArray = word.split("")
  let reverseStringArray = wordStringArray.reverse()
  let reverseWord = reverseStringArray.join("")

  return reverseWord
  //another way is as follows:
  //return word.split("").reverse().join("")
}



function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = stringReverse(word)
  if(word ===reversedWord){
    return true
  }else{
    return false
  }

}

/* 
  Add your pseudocode here
  if string is equal to reverse string then return true
  else return false 
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
