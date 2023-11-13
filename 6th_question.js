// 6th question
function maxiElement(array) {
    let maxValue = Math.max(...array);
    return maxValue;
}
var array = [1, 2, 14, 20, 53, 37];
let resu = maxiElement(array);
console.log("the maximum value in the array is:" + resu);