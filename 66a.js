// // Calculator Switch:
// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.

// Put your answer bellow this line
function calculator(num1,operator,num2){
    switch (operator){
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case 'x':
            return num1*num2;
            break;
        case '/':
            if(num1===0){
                return 0;
            }else if(num2===0){
                return "It is impossible to divide a number by zero";
            }else{
                return num1/num2;
            }
            break;
        default:
            return "Invalid operation";
    }
}
const num1=2;
const num2=4;
const operator='/';
console.log(calculator(num1,operator,num2));
