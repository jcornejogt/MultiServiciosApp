import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/home/feed'])
  }

}
