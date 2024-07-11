function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteDigit() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch {
        document.getElementById('result').value = 'Error';
    }
}
