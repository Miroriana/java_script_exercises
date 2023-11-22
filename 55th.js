// Write a function that checks if a given year is a leap year.
function leapYear(year){
    if(year %4===0){
        console.log(year,"is a leap year");
    }else if (year %100===0 && year %400===0){
        console.log(year,"is a leap year");
    }else{
        console.log(year,"is a not leap year")
    }
}
const year=234;
leapYear(year);