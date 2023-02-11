const displayTop = document.querySelector('#display-top');
const displayBottom = document.querySelector('#display-bottom span');
const buttons = document.querySelectorAll('#keyboard button');

let currentExpression = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.innerText;

        if (value === 'C') {
            currentExpression = '';
            displayTop.innerText = '';
            displayBottom.innerText = '0';
        } else if (value === 'CE') {
            currentExpression = currentExpression.slice(0, -1);
            displayTop.innerText = currentExpression;
        } else if (value === '=') {
            try {
                const result = eval(currentExpression);
                displayBottom.innerText = result;
            } catch (error) {
                displayBottom.innerText = 'Error';
            }
        } else {
            currentExpression += value;
            displayTop.innerText = currentExpression;
        }
    });
});
