// Create a function that takes an integer as an argument
//  and returns "Even" for even numbers
//  or "Odd" for odd numbers.


//Sol 1#
function evenOrOdd(value) {
  if (value % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


//sol 2#
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
//test
console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
