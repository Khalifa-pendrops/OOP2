// A BASE CLASS FOR DIFFERENT CLASSES IN THE SYSTEM
// SUCH CLASS COULD BE STUDENTS, TEACHERS, NON-TEACHING CLASSES, ETC
class Character {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  details() {
    return `Name: ${this.name}, ID: ${this.id}`;
  }
}

// A STUDENT CLASS THAT INHERITS FROM THE CHARACTER CLASS
class Student extends Character {
  constructor(name, id) {
    super(name, id);
    this.grades = [];
  }

  addStudentGrade(grade) {
    if (typeof grade !== "string" && grade > 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log(
        "Sorry, invalid entry. Student grade has to be a number that's less than or equal to 100, but greater than 0."
      );
    }
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return "Ooops, no grade found ⛔";
    } else {
      const totalGrade = this.grades.reduce((sum, grade) => sum + grade, 0);
      return (totalGrade / this.grades.length).toFixed(2);
    }
  }

  studentDetails() {
    const characterDetails = super.details();
    const averageGrade = this.getAverageGrade();
    return `${characterDetails}, Grades: [${this.grades.join(
      ", "
    )}], Average Grade: ${averageGrade}`;
  }
}

// A TEACHER CLASS THAT INHERITS FROM THE CHARACTER CLASS
class Teacher extends Character {
  constructor(name, id) {
    super(name, id);
    this.subjectsTaught = [];
  }

  addSubjectToTeach(subject) {
    this.subjectsTaught.push(subject);
  }

  totalSubjectTaught() {
    return this.subjectsTaught.length;
  }

  teachersDetails() {
    const characterDetails = super.details();
    const subjects = this.totalSubjectTaught();
    return `${characterDetails}, Subjects: [${this.subjectsTaught.join(
      ", "
    )}], Total Subjects Taught: ${subjects}`;
  }
}

class SchoolPortal {
  constructor() {
    this.students = [];
    this.teachers = [];
  }

  addStudent(name, id) {
    const student = new Student(name, id);
    this.students.push(student);
    console.table(
      `A student with name ${student.name} and ID ${student.id} has been added.`
    );
  }

  viewStudentsDetails() {
    if (this.students.length > 0) {
      const fetchStudentDetail = this.students.map((student, index) => ({
        Index: index + 1,
        Name: student.name,
        ID: student.id,
        Grades: student.grades.join(", "),
        "Average Grade": student.getAverageGrade(),
      }));
      console.table(fetchStudentDetail);
    } else {
      console.log("No students found!");
    }
  }

  addTeacher(name, id) {
    const teacher = new Teacher(name, id);
    this.teachers.push(teacher);
    console.table(
      `A teacher named ${teacher.name}, with ID ${teacher.id} has been added.`
    );
  }

  getTeacherById(id) {
    let teacher = this.teachers.find((teacher) => teacher.id === id);
    if (teacher) {
      console.log(teacher.teachersDetails());
    } else {
      console.log(`No teacher with ID ${id} found!`);
    }
  }
}

// INSTANCES...
const portal = new SchoolPortal();

portal.addStudent("khalifa", 123);
portal.addStudent("zayed", 456);
portal.addStudent("mohammed", 789);

const khalifa = portal.students[0];
khalifa.addStudentGrade(93);
khalifa.addStudentGrade(91);
khalifa.addStudentGrade(97);

const zayed = portal.students[1];
zayed.addStudentGrade(100);
zayed.addStudentGrade(77);
zayed.addStudentGrade(81);

const mohammed = portal.students[2];
mohammed.addStudentGrade(56);
mohammed.addStudentGrade(79);
mohammed.addStudentGrade(93);

portal.viewStudentsDetails();

portal.addTeacher("Ms Ogechi", 456);
portal.addTeacher("Mr. Como", 789);

const ogechi = portal.teachers[0];
ogechi.addSubjectToTeach("Agricultural Sciences");
ogechi.addSubjectToTeach("Social Studies");

const como = portal.teachers[1];
como.addSubjectToTeach("Mathematics");
como.addSubjectToTeach("Basic Science");

portal.getTeacherById(456);
portal.getTeacherById(789);

