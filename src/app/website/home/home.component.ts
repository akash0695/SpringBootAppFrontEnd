import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-website-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  ngOnInit() {

  }

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
