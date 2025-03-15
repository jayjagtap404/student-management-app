import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private studentsKey = 'students'; // Key for local storage

  constructor() {}

  // Get all students from local storage
  getStudents(): Student[] {
    const studentsJson = localStorage.getItem(this.studentsKey);
    return studentsJson ? JSON.parse(studentsJson) : [];
  }

  // Add a new student to local storage
  addStudent(student: Student): void {
    const students = this.getStudents();
    students.push(student);
    console.log(students);
    localStorage.setItem(this.studentsKey, JSON.stringify(students));
  }

  // Update an existing student in local storage
  updateStudent(updatedStudent: Student): void {
    const students = this.getStudents();
    const index = students.findIndex(s => s.email === updatedStudent.email);
    if (index !== -1) {
      students[index] = updatedStudent;
      console.log(students);
      localStorage.setItem(this.studentsKey, JSON.stringify(students));
    }
  }

  // Delete a student from local storage
  deleteStudent(email: string): void {
    const students = this.getStudents().filter(s => s.email !== email);
    localStorage.setItem(this.studentsKey, JSON.stringify(students));
  }
  
}
