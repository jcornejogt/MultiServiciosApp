import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private storageServices: StorageService,
    private router: Router
  ) { }

  login(postData: any): Observable<any> {

    return this.httpService.post('login', postData);
  }

  signup(postData: any): Observable<any>{
    return this.httpService.post('signup',postData);
  }

  logout() {
    this.storageServices.removeItem(AuthConstants.AUTH).then(res  => {
      this.router.navigate(['']);
    })

  }
}
