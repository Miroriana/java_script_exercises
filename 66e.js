// Month Name:
// Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.
function monthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Invalid month number";
    }
}
const monthNumber=12;
console.log(monthName(monthNumber));