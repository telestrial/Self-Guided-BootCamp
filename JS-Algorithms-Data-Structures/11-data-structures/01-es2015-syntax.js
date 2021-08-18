class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.tardies = 0;
    this.scores = [];
  }
  // Constructor instantiates (creates) new objects. It MUST be called constructor.
  // This allows you to pass in and assign values to a new student at the time that
  // it is created.

  // The meaning of "this" changes based on where it's used. Inside a constructor,
  // it refers to the individual instance of the class.

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  markLate() {
    this.tardies++;
    if (this.tardies >= 3) {
      return 'With 3 or more tardies, YOU ARE EXPELLED!';
    }
    return `Number of times ${this.firstName} ${this.lastName} has been late: ${this.tardies}.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  // Static methods are particular to STUDENTS..not any one student. Think utility.
  // It has to do with students, but it is not for individual students:
  static EnrollStudents() {
    return 'Enrolling students...';
  }
  // You would invoke this one on Student: Student.EnrollStudents.
  // It could accept values in an instance of a student or it could accept multiple
  // students.
}

// When you define a class, it doesn't actually do anything until you use the
// new keyword to create an instance of it.

let firstStudent = new Student('John', 'Williams', 31);
let secondStudent = new Student('Sean', 'Lock', 58);

console.log(firstStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.tardies);
console.log(firstStudent.markLate());
console.log(secondStudent.scores);
console.log(secondStudent.addScore(94));
