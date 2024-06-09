function hasSubarraySum(arr, target) {
  // Initialize the sum variable to 0
  let sum = 0;
  // Initialize the left pointer to 0
  let left = 0;

  // Iterate through the array using the right pointer
  for (let right = 0; right < arr.length; right++) {
    // Add the current element to the sum
    sum += arr[right];

    // While the sum is greater than the target
    while (sum > target) {
      // Subtract the leftmost element from the sum
      sum -= arr[left];
      // Move the left pointer one step to the right
      left++;
    }

    // If the sum is equal to the target, we found a subarray that sums up to the target
    if (sum === target) {
      // Return true
      return true;
    }
  }

  // If no subarray was found that sums up to the target, return false
  return false;
}

// Function to run test cases
function runTests() {
  console.log("Test Case 1:");
  // Test case with a subarray that sums up to the target
  console.log(hasSubarraySum([4, 2, 7, 1, 9, 5], 17)); // Expected output: true

  console.log("\nTest Case 2:");
  // Test case with a subarray that sums up to the target
  console.log(hasSubarraySum([1, 2, 3, 4, 5], 9)); // Expected output: true

  console.log("\nTest Case 3:");
  // Test case where no subarray sums up to the target
  console.log(hasSubarraySum([1, 2, 3, 4, 5], 20)); // Expected output: false

  console.log("\nTest Case 4:");
  // Test case with a subarray that sums up to the target
  console.log(hasSubarraySum([-1, 0, 1], 0)); // Expected output: true

  console.log("\nTest Case 5:");
  // Test case with an empty array and target 0
  console.log(hasSubarraySum([], 0)); // Expected output: false
}

// Run the test cases
runTests();
