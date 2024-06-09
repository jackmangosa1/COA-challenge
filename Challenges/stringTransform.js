/**
 * Transforms a given string based on the following rules:
 * - If the length of the string is divisible by 3, reverse the entire string.
 * - If the length of the string is divisible by 5, replace each character with its ASCII code.
 * - If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} The transformed string.
 */
function transformString(str) {
  // Get the length of the input string
  const len = str.length;

  // Check if the length is divisible by 15
  if (len % 15 === 0) {
    // Reverse the string first
    const reversedStr = str.split("").reverse().join("");

    // Replace each character with its ASCII code
    return reversedStr
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }
  // Check if the length is divisible by 3
  else if (len % 3 === 0) {
    // Reverse the string
    return str.split("").reverse().join("");
  }
  // Check if the length is divisible by 5
  else if (len % 5 === 0) {
    // Replace each character with its ASCII code
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }
  // If none of the above conditions are met, return the original string
  else {
    return str;
  }
}

// Test cases

/**
 * Function to run all the test cases.
 */
function runTests() {
  console.log("Test Case 1:");
  console.log(transformString("Hamburger")); // Output: regrubmaH

  console.log("\nTest Case 2:");
  console.log(transformString("Pizza")); // Output: 80 105 122 122 97

  console.log("\nTest Case 3:");
  console.log(transformString("Chocolate Chip Cookie")); // Output: eikooCpihCetalocohC

  console.log("\nTest Case 4:");
  console.log(transformString("Ice Cream")); // Output: maerC ecI

  console.log("\nTest Case 5:");
  console.log(transformString("Spaghetti")); // Output: ittehgapS

  console.log("\nTest Case 6:");
  console.log(transformString("Taco")); // Output: Taco
}

// Run the test cases
runTests();
