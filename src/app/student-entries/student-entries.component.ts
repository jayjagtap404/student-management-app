import { Component, OnInit } from '@angular/core';
import { Student } from '../service/student.model';
import { StudentService } from '../service/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';

@Component({
  selector: 'app-student-entries',
  standalone: false,
  templateUrl: './student-entries.component.html',
  styleUrls: ['./student-entries.component.css']
})
export class StudentEntriesComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = ['name', 'email', 'gender', 'course', 'actions'];
  dataSource = new MatTableDataSource<Student>(this.students); 

  constructor(private studentService: StudentService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadStudents();
  }


  loadStudents(): void {
    this.students = this.studentService.getStudents();
    this.dataSource.data = this.students; 
  }


  editStudent(student: Student): void {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: '400px',
      data: { student }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.updateStudent(result);
        this.loadStudents(); 
      }
    });
  }


  deleteStudent(email: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(email);
      this.loadStudents(); 
    }
  }
}