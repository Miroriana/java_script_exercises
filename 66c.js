// Grade System:
// Design a grading system that takes a student's score as input and returns the corresponding grade
//  using a switch case.
function gradeSystem(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            return "A";
        case (score >= 80 && score < 90):
            return "B";
        case (score >= 70 && score < 80):
            return "C";
        case (score >= 60 && score < 70):
            return "D";
        case (score >= 0 && score < 60):
            return "F";
        default:
            return "Invalid score";
    }
}
const score=50;
console.log(gradeSystem(score));

