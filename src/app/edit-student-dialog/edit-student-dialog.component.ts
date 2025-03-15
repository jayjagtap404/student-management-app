import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../service/student.model';


@Component({
  selector: 'app-edit-student-dialog',
  standalone: false,
  templateUrl: './edit-student-dialog.component.html',
  styleUrl: './edit-student-dialog.component.css'
})

export class EditStudentDialogComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { student: Student }
  ) {
    // this.editForm = this.fb.group({
    //   name: [data.student.name, Validators.required],
    //   email: [data.student.email, [Validators.required, Validators.email]],
    //   gender: [data.student.gender, Validators.required],
    //   course: [data.student.course, Validators.required]
    // });

    this.editForm = this.fb.group({
      name: [data.student.name, Validators.required],
      email: [{ value: data.student.email, disabled: true }, [Validators.required, Validators.email]], // Disabled
      gender: [data.student.gender, Validators.required],
      course: [data.student.course, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.editForm.valid) {
      // this.editForm.value.email = this.data.email;
      // this.dialogRef.close(this.editForm.value);
      const formData = this.editForm.getRawValue(); // Include disabled controls
      this.dialogRef.close(formData);
    }
  }
}
