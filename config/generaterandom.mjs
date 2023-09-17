export default function generateUniqueRandomNumbers(count, min, max) {
    const uniqueNumbers = new Set();
  
    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNumber);
    }
  
    return Array.from(uniqueNumbers);
  }