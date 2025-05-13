
function convertToRoman() {
      let num = parseInt(document.getElementById('numberInput').value);
      if (isNaN(num) || num < 1 || num > 100000) {
        document.getElementById('result').innerText = "Please enter a number between 1 and 100000.";
        return;
      }

      const romanArr = [
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
        ['I', 1],
      ];

      let result = '';
      for (let [symbol, value] of romanArr) {
        while (num >= value) {
          result += symbol;
          num -= value;
        }
      }

      document.getElementById('result').innerText = result;
    }