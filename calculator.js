//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, operator, num2) => {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      return num1 / num2;
    } else {
      throw new Error('Invalid operator');
    }
  };
  

  const numb1 = 10;
  const numb2 = 10;
  const operation = '*';
  const result = calculator(numb1, operation, numb2);
  console.log(result); 
  

  