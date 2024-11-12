document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.calculator');
    const result = document.getElementById('result');
    let currentInput = '';
    let previousInput = '';
    let operation = null;

    calculator.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const action = e.target.dataset.action;
            const buttonContent = e.target.textContent;

            switch (action) {
                case 'number':
                    if (currentInput === '0') {
                        currentInput = buttonContent;
                    } else {
                        currentInput += buttonContent;
                    }
                    break;
                case 'operator':
                    if (currentInput !== '') {
                        if (previousInput !== '') {
                            calculate();
                        }
                        operation = buttonContent;
                        previousInput = currentInput;
                        currentInput = '';
                    }
                    break;
                case 'calculate':
                    if (previousInput !== '' && currentInput !== '') {
                        calculate();
                        previousInput = '';
                        operation = null;
                    }
                    break;
                case 'clear':
                    clear();
                    break;
            }

            updateDisplay();
        }
    });

    function calculate() {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                currentInput = (prev + current).toString();
                break;
            case '-':
                currentInput = (prev - current).toString();
                break;
            case '*':
                currentInput = (prev * current).toString();
                break;
            case '/':
                currentInput = (prev / current).toString();
                break;
        }
    }

    function clear() {
        currentInput = '';
        previousInput = '';
        operation = null;
    }

    function updateDisplay() {
        result.value = currentInput || '0';
    }
});