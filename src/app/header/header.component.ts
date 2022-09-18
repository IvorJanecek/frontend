import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  isLoggedIn!: boolean;
  username!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }
  goToChangePassword() {
    this.router.navigateByUrl('/promjeni-sifru/' + this.username);
  }
  goToMojiNatjecaji() {
    this.router.navigateByUrl('/moji-natjecaji/' + this.username);
  }

  goToUgovori() {
    this.router.navigateByUrl('/ugovori');
  }
  goToListUser() {
    this.router.navigateByUrl('/users');
  }
  gotoView() {
    this.router.navigateByUrl('/list-natj');
  }
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }
}
