import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ChangeRequestPayload } from './change-request.payload';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  resetPasswordFormGroup: FormGroup;
  toastr: any;
  changeRequestPayload!: ChangeRequestPayload;

    constructor(
        private router: Router,
        private apiService: AuthService,
        private authSerivce: AuthService,
                private formbuilder: FormBuilder
    ) {
        this.resetPasswordFormGroup = this.formbuilder.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, { validator: this.checkPasswords });
    }
  ngOnInit() {
  }


    checkPasswords(group: FormGroup) {
        const pass = group.controls['newPassword'].value;
        const confirmPass = group.controls['confirmPassword'].value;

        return pass === confirmPass ? null : { notSame: true };
    }
  
    changePassword() {
      this.changeRequestPayload.newpassword = this.resetPasswordFormGroup.get('newpassword')!.value;
      this.changeRequestPayload.password = this.resetPasswordFormGroup.get('password')!.value;
  
      this.authSerivce.changePassword(this.changeRequestPayload).subscribe(() => {
        this.router.navigate(['login'],
        { queryParams: { registered: 'true'}});
      }, () => {
        this.toastr.error('Registration failed! try again ');
        
      });
    }
}
