
//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (numbers) => {
    if (numbers.length < 2) {
      throw new Error('Array must contain at least two elements');
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of numbers) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error('There is no second smallest element');
    }
  
    return secondSmallest;
  };
  

  const inputArray = [5, 2, 8, 3, 9, 1];
  const secondSmallest = findSecondSmallest(inputArray);
  console.log(secondSmallest); 
  