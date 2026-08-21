function getGrade(score) {

    let studentScore = score;

    switch (true) {

        case (studentScore >= 90):
            return "Grade A";

        case (studentScore >= 80):
            return "Grade B";

        case (studentScore >= 70):
            return "Grade C";

        case (studentScore >= 60):
            return "Grade D";

        default:
            return "Grade F";
    }
}

let score = 70;

console.log("Student Score: " + score);
console.log("Grade: " + getGrade(score));