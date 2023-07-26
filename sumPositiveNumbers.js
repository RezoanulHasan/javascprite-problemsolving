//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

//Example Input: [2, -5, 10, -3, 7] Example Output: 19

 
const sumPositiveNumbers = (numbers) => {
    let sum = 0;
    numbers.forEach((number) => {
      if (number > 0) {
        sum += number;
      }
    });
    return sum;
  };
  
  const input = [2, -5, 10, -3, 7];
  const output = sumPositiveNumbers(input);
  console.log(output);


  // for all negative numbers sum in the array
  const sumNegativeNumbers = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      sum += number;
    }
  });
  return sum;
};


const negative = [2, -5, 10, -3, 7];
const result = sumNegativeNumbers(negative);
console.log(result); 
