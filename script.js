document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        // Clear previous results
        resultDiv.className = '';
        resultDiv.textContent = '';

        // Get input value
        const num = parseInt(numberInput.value);

        // Validate input
        if (isNaN(num)) {
            resultDiv.textContent = 'Please enter a valid number';
            resultDiv.className = 'error';
            return;
        }

        if (num < 1 || num > 100000) {
            resultDiv.textContent = 'Number must be between 1 and 100,000';
            resultDiv.className = 'error';
            return;
        }

        // Convert to Roman numeral
        const romanNumeral = convertToRoman(num);
        resultDiv.textContent = `${num} in Roman numerals is: ${romanNumeral}`;
    });

    function convertToRoman(num) {
        if (num === 0) return "Romans didn't have a symbol for zero";
        
        const valSym = [
            [1000, 'M'],
            [900, 'CM'],
            [500, 'D'],
            [400, 'CD'],
            [100, 'C'],
            [90, 'XC'],
            [50, 'L'],
            [40, 'XL'],
            [10, 'X'],
            [9, 'IX'],
            [5, 'V'],
            [4, 'IV'],
            [1, 'I']
        ];
        
        let roman = '';
        
        for (const [value, symbol] of valSym) {
            while (num >= value) {
                roman += symbol;
                num -= value;
            }
        }
        
        return roman;
    }
});