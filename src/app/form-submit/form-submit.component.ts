import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.scss']
})
export class FormSubmitComponent {
  formSubmit: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient) {
    // Initialize the form with FormBuilder
    this.formSubmit = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission here
    if (this.formSubmit.valid) {
      const formData = this.formSubmit.value;
      // You can send formData to your server or perform any other action here
      this.http.post('/form', formData).subscribe(
        (response) => {
          // Handle the successful response here
          console.log('Response:', response);
        },
        (error) => {
          // Handle any errors here
          console.error('Error:', error);
        }
    )} else {
      // Form is invalid, show error messages or handle as needed
    }
  }


}
