# JavaScript Null Check Bug
This repository contains a simple JavaScript function with a bug related to null checks. The function `foo` adds two numbers, but it incorrectly handles null values.

## Bug Description
The function `foo` returns null if either input `a` or `b` is null. This is incorrect behavior because if one of the inputs is null, the other input should be returned. 

## Bug Solution
The solution provided addresses this issue by handling the cases where either `a` or `b` is null while preserving the correct addition operation when both values are numbers.

## How to run the code:
1. Clone the repository.
2. Open the `bug.js` file to view the original buggy code.
3. Open the `bugSolution.js` file to view the corrected code.
4. Execute the JavaScript files in a suitable environment like Node.js.