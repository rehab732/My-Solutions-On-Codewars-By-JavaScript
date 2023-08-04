// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

//Sol 1#

function sumArray(array) {
  if (array == null) return 0;
  if (array.length < 2) {
    return 0;
  } else {
    return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((acc, current) => acc + current, 0);
  }
}

console.log(sumArray([6, 2, 1, 8, 10]));
// 1,2,6,8,10
// 2,6,8==>16

//Sol 2# But can't work correct if the minvalue or maxvalue duplicated
function solutionTwo(array) {
  if (array == null) return 0;
  if (array.length < 2) {
    return 0;
  } else {
    let maxvalue=Math.max(...array);
    let minvalue=Math.min(...array);
    // console.log(maxvalue,minvalue)
    return  array.filter((value)=>value !==maxvalue && value!==minvalue).reduce((acc,current)=>acc+current,0);
  }
}

console.log(solutionTwo([6, 2, 1, 8, 10]));