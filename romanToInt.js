//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanNumeral) => {
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let integer = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const nextNumeral = romanNumeral[i + 1];
  
      if (romanValues[currentNumeral] < romanValues[nextNumeral]) {
        integer -= romanValues[currentNumeral];
      } else {
        integer += romanValues[currentNumeral];
      }
    }
  
    return integer;
  };
  

  const romanNum1 = "IX";
  const romanNum2 = "XXI";
  console.log(romanToInt(romanNum1));
  console.log(romanToInt(romanNum2)); 
  