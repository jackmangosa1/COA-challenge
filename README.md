# COA-challenge 🎯

This is a coding challenge for the Code of Africa application.
Prerequisite: Install Node.js on your machine. You can download it from the official website: https://nodejs.org/en/download/

# Set up

Step one: To clone the repository, use the following command:

```bash
   git clone https://github.com/jackmangosa1/COA-challenge.git
```

Step two: Then, navigate to the challenges folder:

```bash
   cd COA-challenge/challenges
```

# Challenge 1: Finding a Contiguous Subarray with a Given Sum

A. Approach:

The sliding window technique is utilized. Two pointers, left and right, represent the start and end of the current subarray. A variable 'sum' tracks the running sum. We iterate through the array using the right pointer, adding each element to the sum. At each iteration, we check if the sum exceeds the target sum. If it does, we subtract the leftmost element from the sum and move the left pointer one step to the right. We repeat this process until the sum is less than or equal to the target. If the sum becomes equal to the target, we return true; otherwise, false. Time complexity: O(n). Space complexity: O(1).

B. How to run 🚀:

Open a terminal or command prompt after navigation to the /challenges directory.
Run the file using Node.js by executing the following command:

```bash
   node node arrayMap.js
```

This will execute the test cases and print the output to the console.

# Challenge 2: Transforming a String Based on Length Divisibility

A. Approach:

We check the divisibility of the string's length by 3, 5, and 15. Based on these conditions, we apply corresponding transformations. If divisible by 15, we reverse the string and replace each character with its ASCII code. If divisible by 3 but not by 5 or 15, we simply reverse the string. If divisible by 5 but not by 3 or 15, we replace each character with its ASCII code. Time complexity: O(n). Space complexity: O(n).

B. How to run 🚀:

Open a terminal or command prompt after navigation to the /challenges directory.
Run the file using Node.js by executing the following command:

```bash
   node stringTransform.js
```

This will execute the test cases and print the output to the console.
Note: Both solutions assume that the input provided adheres to the specified constraints, such as the range of values for the array elements and the target sum (in the first question), and the length of the string and the presence of only alphanumeric characters and spaces (in the second question)⚠️.
