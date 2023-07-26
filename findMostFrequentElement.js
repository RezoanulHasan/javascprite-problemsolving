
//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3



const findMostFrequentElement = (arr) => {
    if (arr.length === 0) {
      return undefined; // If the array is empty, there is no most frequent element
    }
  
    const frequencyMap = new Map();
    let maxFrequency = 0;
    let mostFrequentElement;
  
    arr.forEach((element) => {
      const currentFrequency = (frequencyMap.get(element) || 0) + 1;
      frequencyMap.set(element, currentFrequency);
  
      if (currentFrequency > maxFrequency) {
        maxFrequency = currentFrequency;
        mostFrequentElement = element;
      }
    });
  
    return mostFrequentElement;
  };
  

  const input = [3, 5, 1, 5, 3, 3, 1, 4, 5];
  const output = findMostFrequentElement(input);
  console.log(output); 
  