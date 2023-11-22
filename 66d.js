// Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).
function trafficLight(colorCode) {
    switch (colorCode) {
        case 1:
            return "Red";
        case 2:
            return "Yellow";
        case 3:
            return "Green";
        default:
            return "Invalid color code";
    }
}
const colorCode=2;
console.log(trafficLight(colorCode));
