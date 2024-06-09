# COA-challenge 🎯

This is a coding challenge for the Code Of Africa application.

# Prerequisite:

Install Node.js on your machine. You can download it from the official website: https://nodejs.org/en/download/

# Cloning the Repository

To clone the repository and navigate to the challenges folder, use the following commands:

bash
Copy code
git clone https://github.com/jackmangosa1/COA-challenge.git
cd COA-challenge/challenges

# Challenge 1: Finding a Contiguous Subarray with a Given Sum 🔍

# Approach:

Initialize two pointers (left and right) and a variable sum to keep track of the current subarray's sum.
Iterate through the array with the right pointer, adding elements to sum.
If sum exceeds the target, move the left pointer to the right and subtract the value at left from sum.
Continue adjusting the window until sum equals the target or the array is fully traversed.
Return true if a subarray is found that sums up to the target; otherwise, return false.
Setup Instructions:
Navigate to the /challenges directory and run the file using Node.js:

bash
Copy code
node arrayMap.js
This will execute the test cases and print the output to the console. 💻

# Challenge 2: Transforming a String Based on Length Divisibility 🔡

# Approach:

If the length of the string is divisible by 15:
Reverse the string.
Convert each character to its ASCII value and join them with spaces.
If the length is divisible by 5 but not by 15:
Convert each character to its ASCII value and join them with spaces.
If the length is divisible by 3 but not by 5 or 15:
Reverse the string.
Setup Instructions:
Navigate to the /challenges directory and run the file using Node.js:

bash
Copy code
node stringTransform.js
This will execute the test cases and print the output to the console. 💻

Note: Both solutions assume that the input provided adheres to the specified constraints, such as the range of values for the array elements and the target sum (in the first question), and the length of the string and the presence of only alphanumeric characters and spaces (in the second question). ⚠️

# Contact

LinkedIn: Jack Mangosa
Email: jackmangosa@gmail.com
