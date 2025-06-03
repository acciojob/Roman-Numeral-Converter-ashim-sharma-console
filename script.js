function toRoman(num) {
  if (num <= 0 || num > 100000) return 'Invalid input';

  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';
  for (const [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

function convertToRoman() {
  const input = document.getElementById('numberInput').value;
  const number = parseInt(input, 10);

  const roman = toRoman(number);
  document.getElementById('result').textContent = roman;
}

// Export for test compatibility (optional)
window.toRoman = toRoman;
window.convertToRoman = convertToRoman;
