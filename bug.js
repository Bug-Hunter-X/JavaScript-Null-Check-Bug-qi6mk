function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is the buggy line
  }
  return a + b;
}
console.log(foo(null, 1)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(1, 1)); // Output: 2