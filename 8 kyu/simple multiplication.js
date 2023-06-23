// DESCRIPTION:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Solution

function simpleMultiplication( a) {
  return a * (a % 2 == 0 ? 8 : 9);
}

// Another Solution

function simpleMultiplication(a)
{
  var r=a%2
  var c=a*8
  var b=a*9
  return r==1?c:b;
}