// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count=0;
  let vowels=['a','e','i','o','u'];
  if(str === str.toLowerCase())
  {
    let newstr=str.split('');
    for (let i=0;i<newstr.length;i++)
    {
      if(vowels.includes(newstr[i]))
        count++;
    }
    return count;
  }

}

//Sol 2#

function getCountV2(str) {
  let vowels='aeiou'
  if(str === str.toLowerCase())
  {
    let newstr=str.split('');
    return newstr.filter((letter)=>vowels.includes(letter)).length;
  }

}
