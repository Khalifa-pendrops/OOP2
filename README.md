# Student Management System

---

## Description

This simple system manages students. It can add students to the system, view student details, calculate avaerage grade of student if applicable, etcetra. The system was also modified to manage teachers as well. Teachers can be added, and their details viewded.

---

## How to use system

1. fork this repository

2. naviagte to the file directory

3. enter this command below on the terminal

```bash

node system.js

```

---

## OOP concepts at work here:

- Inheritance: used in the instances of sub-classes that extends to the base class, in this case Student and Teacher classes.

- Encapsulation: the _name_, _id_, and _grades_ properties are encapsulated within their respective classes.

- Abstraction: methods such as _details_, _addStudentGrade_ and _getAverageGrade_ hide their complexities using abstraction.

- Polymorphism: _studentDetails_ in the Student class for example overrides _details_ in the Character class explaining polymorphism.

---

## Contribution

Contributions are welcome. Please make changes, push and create PR, and wait for feedback.
