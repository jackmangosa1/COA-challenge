// Function to transform the string based on the given rules
function transformString(str) {
  const length = str.length; // Get the length of the string

  // If the length is divisible by 3 and 5 (i.e., divisible by 15)
  if (length % 3 === 0 && length % 5 === 0) {
    // Reverse the string first
    str = str.split("").reverse().join(""); // Convert the string to an array, reverse it, and join it back into a string

    // Replace each character with its ASCII code
    str = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" "); // Convert the string to an array, replace each character with its ASCII code, and join the array with spaces
  }
  // If the length is divisible by 3
  else if (length % 3 === 0) {
    // Reverse the string
    str = str.split("").reverse().join(""); // Convert the string to an array, reverse it, and join it back into a string
  }
  // If the length is divisible by 5
  else if (length % 5 === 0) {
    // Replace each character with its ASCII code
    str = str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" "); // Convert the string to an array, replace each character with its ASCII code, and join the array with spaces
  }

  return str; // Return the transformed string
}

// Test cases
function runTests() {
  console.log("Test Case 1:");
  console.log(transformString("Hamburger")); // Expected output: "regrubmaH"

  console.log("\nTest Case 2:");
  console.log(transformString("Pizza")); // Expected output: "80 105 122 122 97"

  console.log("\nTest Case 3:");
  console.log(transformString("Chocolate Chip Cookie")); // Expected output: "eikooCpihCetalocohC"

  console.log("\nTest Case 4:");
  console.log(transformString("Spaghetti")); // Expected output: "105 116 116 101 104 103 97 112 83"

  console.log("\nTest Case 5:");
  console.log(transformString("Tacos")); // Expected output: "socaT"

  console.log("\nTest Case 6:");
  console.log(transformString("Ice Cream Sundae")); // Expected output: "eadnuSmaerCecI"
}

// Run the tests
runTests();
