function convertToRoman() {
  const numInput = document.getElementById('numberInput').value;
  let num = parseInt(numInput);
  const output = document.getElementById('output');

  if (isNaN(num) || num < 1 || num > 100000) {
    output.textContent = 'Please enter a number between 1 and 100000.';
    return;
  }

  const romanNumerals = [
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
  for (const [symbol, value] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  output.textContent = result.toUpperCase(); // Ensures uppercase output
}