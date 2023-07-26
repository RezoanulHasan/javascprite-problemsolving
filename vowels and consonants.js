// calculate the number of vowels and consonants in a string
const count = str => {
str = str.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
let vowelCount = 0;
let consonantCount = 0;
   for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (consonants.includes(char)) {
        consonantCount++;
      }
    }
  
    return { vowels: vowelCount, consonants: consonantCount };
  };
  
  // Test the function
  const input = "Rezaonul Hasan";
  const counts = count(input);
  console.log(counts);
  