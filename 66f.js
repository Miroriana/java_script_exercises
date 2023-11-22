// Simple Menu:
// Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.


function simpleMenu(option) {
    switch (option) {
        case 1:
            return "Perform operation 1";
            break;
        case 2:
            return "Perform operation 2";
            break;
        case 3:
            return "Perform operation";
            break;
        default:
            return "The operation number is invalid";
            break;
    }
}
const option=2;
console.log(simpleMenu(option));