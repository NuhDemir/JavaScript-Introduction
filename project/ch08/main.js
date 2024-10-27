const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay() {
    display.value = displayValue;
}

keys.addEventListener('click', function(e) {
    const element = e.target.closest('button'); // En yakın button öğesini seçer

    if (!element) return;

    if (element.classList.contains('operator')) {
        handleOperator(element.value);
        updateDisplay();
        return;
    }

    if (element.classList.contains('decimal')) {
        inputDecimal(element.value);
        updateDisplay();
        return;
    }

    if (element.classList.contains('clear')) {
        clear();
        updateDisplay();
        return;
    }

    if (element.classList.contains('equal-sign')) {
        calculateResult();
        updateDisplay();
        return;
    }

    inputNumber(element.value);
    updateDisplay();
});

function inputNumber(num) {
    if (waitingForSecondValue) {
        displayValue = num;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }
}

function inputDecimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if (operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null && !isNaN(value)) {
        firstValue = value;
    } else if (operator) {
        const result = calculate(firstValue, value, operator);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOperator;
}

function calculate(first, second, operator) {
    if (operator === '+') return first + second;
    if (operator === '-') return first - second;
    if (operator === '*') return first * second;
    if (operator === '/') return first / second;
    return second;
}

function calculateResult() {
    if (operator && !waitingForSecondValue) {
        displayValue = `${calculate(firstValue, parseFloat(displayValue), operator)}`;
        firstValue = null;
        operator = null;
        changeBackgroundColor(); // Arka plan rengini değiştirme fonksiyonunu çağır
    }
}

function changeBackgroundColor() {
    display.style.backgroundColor = '#740000'; // Hesap sonucu sonrası arka plan rengini kırmızı yap
}

function clear() {
    displayValue = '0';
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
    display.style.backgroundColor = '#ffffff'; // Temizle butonuna basıldığında orijinal renge dön
    updateDisplay();
}