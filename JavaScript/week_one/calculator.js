let expression = ''

const buttonOne = () => {

    expression = expression + 1
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonTwo = () => {
    expression = expression + 2
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonThree = () => {

    expression = expression + 3
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonFour = () => {
    expression = expression + 4
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonSix = () => {

    expression = expression + 6
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonFive = () => {
    expression = expression + 5
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonSeven = () => {

    expression = expression + 7
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonEight = () => {
    expression = expression + 8
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}

const buttonNine = () => {

    expression = expression + 9
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonMinus = () => {
    expression = expression + ' - '
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonPoint = () => {
    expression = expression + '.'
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonAdd = () => {
    expression = expression + ' + '
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonReset = () => {
    expression = ''
    document.getElementById('screenValue').innerText = expression


}
const buttonModu = () => {
    expression = expression + ' % '
    document.getElementById('screenValue').innerText = expression

}

const buttonZero = () => {
    expression = expression + 0
    document.getElementById('screenValue').innerText = expression
}
const buttonMult = () => {
    expression = expression + ' * '
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}
const buttonDiv = () => {
    expression = expression + ' / '
    document.getElementById('screenValue').innerText = expression

    console.log(expression)
}

const equalbtn = () => {
const value =   calculator(document.getElementById('screenValue').innerText)
if(value.isNaN){
    
    document.getElementById('screenValue').innerText = expression

} else{
    document.getElementById('screenValue').innerText = value  

}
}
const buttonDelete = () => [
    expression = expression.slice(0, -1),
    document.getElementById('screenValue').innerText = expression

]



function calculator(expression) {
    const tokens = toArrey(expression);
    console.log(tokens)
    const result = evaluateExpression(tokens);

    
    return result;
}


function toArrey(expression) {
    const tokens = [];
    let currentToken = '';
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char >= '0' && char <= '9' || char === '.' || char === ' ') {
            currentToken += char;
        }
        else {
            if (currentToken) {
                tokens.push(parseFloat(currentToken));
                currentToken = '';
            }
            tokens.push(char);
        }
    }
    if (currentToken) {
        tokens.push(parseFloat(currentToken));
    }
    return tokens;
}



function evaluateExpression(expression) {
    let newNumber;
    let nexNumber;
    let number = 0;
    let inDex = 2;

    for (const token of expression) {
        if (typeof token === 'number') {
            console.log('Token in the if block', token, typeof (token))
            newNumber = token;
            if (parseInt(expression[inDex])) nexNumber = parseInt(expression[inDex]);
            if (inDex == 2) {
                number += newNumber;
            }
            inDex += 2;
        } else {
            console.log('Token in the else block', token)
            if (token == '+') {
                number = number += nexNumber;

            } else if (token == '-') {
                number = number -= nexNumber;
            } else if (token == '*') {
                number = number *= nexNumber;
            } else if (token == '/') {
                number = number /= nexNumber;


            } else if (
                token == '%'
            ) {
                number = number % nexNumber;
            }
        }
    }

    return typeof (number) == "number" ? number : 'Enter Valid expression';
}

