// // Day of Week:
// Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.
function daysofweek(days){
    switch (days){
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;
        default:
            return "The day doesn't exist";
            break;
    }
}
    const days = 9;
    console.log(daysofweek(days));