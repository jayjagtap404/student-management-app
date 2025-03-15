import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { StudentService } from '../service/student.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})

export class StudentDetailsComponent implements OnInit {
  studentForm: FormGroup | any;
  cityControl: any; // Declare the property
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  filteredCities: Observable<string[]> | undefined;

  constructor(private fb: FormBuilder, private stu: StudentService,
    private dialog: MatDialog) {
    this.cityControl = this.fb.control(''); // Initialize here
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      course: ['', Validators.required],
      reading: [false],
      sports: [false],
      music: [false],
      city: this.cityControl // Add cityControl to the form group
    });

    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filterCities(value))
    );
  }

  private _filterCities(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }

  onSubmit(): void {
    // if (this.studentForm?.valid) {
    //   const formData = {
    //     ...this.studentForm.value,
    //     city: this.cityControl.value
    //   };
    //   // console.log('Form Data:', formData);
    //   this.stu.addStudent(formData); 
    // }

    if (this.studentForm?.valid) {
      const formData = {
        ...this.studentForm.value,
        city: this.cityControl.value
      };
      this.stu.addStudent(formData);

      // Open confirmation dialog
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: { message: 'Student details added to student entries table.' }
      });

      // Reset the form after the dialog is closed
      dialogRef.afterClosed().subscribe(() => {
        this.studentForm.reset();
        this.cityControl.reset(); // Reset the city control separately
      });
    }
  }
}
