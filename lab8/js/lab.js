/**
 * Author:    Diego
 * Created:   05.02.2022
 *
 **/

//Declaring array numbers
var numbers = [5, 8, 2, 12, 15];

//isOdd checks if numbers inputted are odd
function isOdd(x) {
  if (x === 0) return false;

  return (x & -x) === 1;
}

//takes in arrays and multiplies each element by 2
numbers.map(function(x){
    var results = x * 2;
    return results;
})

//checking if numbers are odd
isOdd(numbers[3]);

isOdd(-5);

isOdd(38);
