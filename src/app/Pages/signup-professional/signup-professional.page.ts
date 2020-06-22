import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-professional',
  templateUrl: './signup-professional.page.html',
  styleUrls: ['./signup-professional.page.scss'],
})
export class SignupProfessionalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registrate(){
    this.router.navigate(['/login'])
  }
}
