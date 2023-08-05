
// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 21
// 4 --> 13 + 15 + 17 + 19 =64

rowSumOddNumbers(3)//output==>21

function rowSumOddNumbers(n) {
  // Calculate the starting odd number for the nth row
  const startNumber = (n - 1) * n + 1;
  
  let sum = 0;
  
  // Calculate the sum of the numbers in the nth row
  for (let i = 0; i < n; i++) {
    sum += startNumber + 2 * i; // Odd numbers are incremented by 2
  }
  
  return sum;
}