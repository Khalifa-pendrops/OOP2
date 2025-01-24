class System {
  #Id;
  constructor(name, Id, grade) {
    this.name = name;
    this.grade = grade;
    this.#Id = Id; //this is private, explaining encapsulation
  }

  addStudent(student) {
    console.log(`${student} has been added to the system.`);
  }

  studentDetails() {
    console.table(
      `Student Details: Name: ${this.name}, ID: ${this.#Id}, Grade: ${
        this.grade
      }, Best Subject: ${this.bestSubject}`
    );
  }

  // abstraction explained here!
  averageGrade(totalScore, numberOfSubjects) {
    throw new Error("Forget it, not for this System class");
  }
}

class ReturningStudent extends System {
  constructor(name, Id, grade, bestSubject) {
    super(name, Id, grade);
    this.bestSubject = bestSubject;
  }

  specialty() {
    console.log(
      `${this.name} is a science student. His best suject is ${this.bestSubject}`
    );
  }

  averageGrade(totalScore, numberOfSubjects) {
    const result = totalScore / numberOfSubjects;
    console.log(`Average grade: ${result}`);
  }
}

class NewStudent extends System {
  constructor(name, Id, grade) {
    super(name, Id, grade);
  }

  averageGrade(totalScore, numberOfSubjects) {
    console.log(`${this.name} has no average grade, he/she is a new Student.`); //POLYMORPHISM
  }
}

// INSTANCE OF RETURNING STUDENT
const returningStudent = new ReturningStudent("Khalifa", 101, 100, "Chemistry");

returningStudent.addStudent("Khalifa");

returningStudent.studentDetails();

returningStudent.averageGrade(88, 9);

returningStudent.specialty();

// INSTANCE OF NEW STUDENT
const newStudent = new NewStudent("Ogechi", 111, undefined);

newStudent.addStudent("Ogechi");

newStudent.studentDetails();

newStudent.averageGrade();
