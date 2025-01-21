# Unexpected Behavior with Null and Strict Equality in JavaScript

This repository demonstrates a subtle bug in JavaScript related to the handling of null values and strict equality checks (===).

The `foo` function adds two numbers. However, it incorrectly handles null values using strict equality.  This can lead to unexpected results or errors if not handled carefully. The bug.js file shows the original faulty code. The bugSolution.js file shows the corrected code.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime like Node.js. 
4. Observe that when null is passed in any argument, the function returns null even if the other argument is a valid number.

## Solution

The solution demonstrates how to correctly handle null values when adding numbers.  Type checking and the use of loose equality in this scenario can provide a more robust and predictable result.