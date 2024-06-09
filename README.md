# COA-challenge 🎯

This is a coding challenge for the Code Of Africa application.
Prerequisite: Install Node.js on your machine.
You can download it from the official website: https://nodejs.org/en/download/

📁 To clone the repository, you can use the following commands:

````bash
git clone https://github.com/jackmangosa1/COA-challenge.git
cd COA-challenge/challenges

Navigate to the challenges folder:

```bash
cd COA-challenge/challenges


# Challenge 1: Finding a Contiguous Subarray with a Given Sum 🔍

# A.Approach:

The approach used to solve this problem is the sliding window technique. We initialize two pointers, left and right, to represent the start and end of the current subarray we're considering. We also initialize a variable sum to keep track of the running sum of the current subarray. We then iterate through the array using the right pointer, adding each element to the sum. At each iteration, we check if the sum exceeds the target sum. If it does, we subtract the leftmost element from the sum and move the left pointer one step to the right. We repeat this process until the sum is less than or equal to the target. If the sum becomes equal to the target, we have found a subarray that sums up to the target, and we return true. If the loop completes without finding such a subarray, we return false. This approach has a time complexity of O(n) because we iterate through the array once. The space complexity is O(1) since we use a constant amount of extra space, regardless of the input size.

# B.Setup Instructions:

📁 Open a terminal or command prompt and navigate to the /challenges directory.
🚀 Run the file using Node.js by executing the following command: node arrayMap.js

This will execute the test cases and print the output to the console. 💻

# Challenge 2: Transforming a String Based on Length Divisibility 🔡

# A.Approach:

The approach used to solve this problem involves checking the divisibility of the string's length by 3, 5, and 15 (divisible by both 3 and 5). Based on the divisibility conditions, we apply the corresponding transformations to the string. If the length of the string is divisible by 15, we first reverse the string using the split, reverse, and join methods. Then, we replace each character with its ASCII code using the split, map, and join methods. If the length of the string is divisible by 3 but not by 5 or 15, we simply reverse the string using the split, reverse, and join methods. If the length of the string is divisible by 5 but not by 3 or 15, we replace each character with its ASCII code using the split, map, and join methods. The time complexity of this solution is O(n), where n is the length of the input string, because we iterate through the string once to perform the transformations. The space complexity is also O(n) because we create a new string or array of the same length as the input string during the transformations.

# B.Setup Instructions:

📁 Open a terminal or command prompt and navigate to the /challenges directory.
🚀 Run the file using Node.js by executing the following command: node stringTransform.js

This will execute the test cases and print the output to the console. 💻
Note: Both solutions assume that the input provided adheres to the specified constraints, such as the range of values for the array elements and the target sum (in the first question), and the length of the string and the presence of only alphanumeric characters and spaces (in the second question). ⚠️
````
