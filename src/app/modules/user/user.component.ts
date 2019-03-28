import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          companyName: ['', Validators.required],
          firstName: ['', Validators.required],
          businessPhone : ['', Validators.required, Validators.maxLength(7)],
          extension : ['', Validators.required, Validators.maxLength(3)],
          lastName: ['', Validators.required],
          mobile : ['', Validators.required, Validators.maxLength(10)],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
      this.router.navigate(['/success']);
      
  }
}
