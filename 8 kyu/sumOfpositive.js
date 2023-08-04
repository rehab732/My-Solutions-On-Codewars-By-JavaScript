// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0

//sol 1#
function positiveSum(arr) {
 
  if(arr.length==0)
  {
    return 0;
  }else{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]>0)
        sum+=arr[i];
    }
    return sum;
  }
  
}


//Sol 2# by filter and reduce

function sumOfPositive(arr)
{
  if(arr.length==0)
  {
    return 0;
  }else
  {
    return arr.filter((value)=>value>0).
    reduce((acc,current)=>acc+current,0);

  }
  
}