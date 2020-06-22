import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registrate(){
    this.router.navigate(['/login'])
  }
  navigateToTypeOfLogin() {
    this.router.navigate(['type-of-login']);
  }

}
