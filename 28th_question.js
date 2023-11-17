
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
//     // Compare the original and reversed strings
//     return cleanStr === cleanStr.split('').reverse().join('');
//   }
  
//   // Example usage
//   const testString1 = "radar";
//   console.log(isPalindrome(testString1)); // Outputs: true
  
//   const testString2 = "hello";
//   console.log(isPalindrome(testString2)); // Outputs: false


  function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Compare the string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
const inputString = "A man a plan a canal Panama";
const result = isPalindrome(inputString);

if (result) {
    console.log(`'${inputString}' is a palindrome.`);
} else {
    console.log(`'${inputString}' is not a palindrome.`);
}
