import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  @ViewChild('registrationForm') form: NgForm;

  userFormData: FormGroup = new FormGroup({
    studentName: new FormControl('', [Validators.required]),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    age: new FormControl(0, Validators.required),
    grade: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  });

  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'other', display: 'Prefer Not to Say' },
  ];

  OnFormSubmit() {
    console.log(this.form);
  }
}
