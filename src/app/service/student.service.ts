import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private studentsKey = 'students'; 

  constructor() {}

 
  getStudents(): Student[] {
    const studentsJson = localStorage.getItem(this.studentsKey);
    return studentsJson ? JSON.parse(studentsJson) : [];
  }


  addStudent(student: Student): void {
    const students = this.getStudents();
    students.push(student);
    console.log(students);
    localStorage.setItem(this.studentsKey, JSON.stringify(students));
  }

  
  updateStudent(updatedStudent: Student): void {
    const students = this.getStudents();
    const index = students.findIndex(s => s.email === updatedStudent.email);
    if (index !== -1) {
      students[index] = updatedStudent;
      console.log(students);
      localStorage.setItem(this.studentsKey, JSON.stringify(students));
    }
  }

  
  deleteStudent(email: string): void {
    const students = this.getStudents().filter(s => s.email !== email);
    localStorage.setItem(this.studentsKey, JSON.stringify(students));
  }
  
}
