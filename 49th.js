// Write a function that calculates the Fibonacci sequence up to n numbers

function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
const n=5;
console.log(fibonacciSequence(n));