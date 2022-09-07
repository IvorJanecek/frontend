import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  username = String;
  email = String;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
    
  }

}
