import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    username: '',
    password: ''

  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private StorageService: StorageService
  ) { }

  ngOnInit() { }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();

    return (this.postData.username &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
   
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res: any) => {
        if (res.userData) {
          this.StorageService.store(AuthConstants.AUTH, res.userData);
          this.router.navigate(['home']);
        } else {
          console.log('Incorrect username or Password');
        }
      },
        (error: any) => {
          console.log('Network connection error');
        }
      );
    } else {
      console.log('Please give some information');
    } 
  }
}


