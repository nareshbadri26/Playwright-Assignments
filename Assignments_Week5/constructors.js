"use strict";
class Student {
    studentName;
    course;
    constructor(studentName, course) {
        this.studentName = studentName;
        this.course = course;
    }
    displayDetails() {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Course: ${this.course}`);
    }
}
let obj1 = new Student('Naresh', 'Playwright');
let obj2 = new Student('Ram', 'Selenium');
obj1.displayDetails();
obj2.displayDetails();
