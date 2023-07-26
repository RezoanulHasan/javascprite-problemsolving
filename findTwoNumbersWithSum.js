
//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

const findTwoNumbersWithSum = (sortedArr, target) => {
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left < right) {
      const sum = sortedArr[left] + sortedArr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null; // If no such pair is found, return null
  };
  

  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const output = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(output);