//cheka Palindrome or not 

const isPalindrome = (str) => {
    const ForwardStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversStr = ForwardStr.split("").reverse().join("");
    return ForwardStr === reversStr;
  };

  const input = "level";
  console.log(isPalindrome(input)); 
  