import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SignupRequestPayload } from './signup-request.payload';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupRequestPayload!: SignupRequestPayload;
  signupForm!: FormGroup;

 
  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
  }

  

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  signup() {
    this.signupRequestPayload.username = this.signupForm.get('username')!.value;
    this.signupRequestPayload.email = this.signupForm.get('email')!.value;
    this.signupRequestPayload.password = this.signupForm.get('password')!.value;

    this.authService.signup(this.signupRequestPayload).subscribe(() => {
      this.router.navigate(['login'],
      { queryParams: { registered: 'true'}});
    }, () => {
      this.toastr.error('Registration failed! try again ');
      
    });
  }
  

  
}