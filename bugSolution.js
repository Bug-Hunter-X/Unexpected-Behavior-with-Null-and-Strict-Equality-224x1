function foo(a, b) {
  // Check if either a or b is null, using loose equality
  if (a == null || b == null) {
    // Handle null values appropriately, either by returning 0 or throwing an error
    return 0; // Or throw new Error("Null values not allowed");
  }

  // Ensure both a and b are numbers before addition
  a = Number(a);
  b = Number(b);

  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, '2')); // Output: 3