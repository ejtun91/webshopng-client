import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURLAuth = environment.apiURL + 'users';

  constructor(
    private http: HttpClient,
    private tokenService: LocalstorageService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLAuth}/login`, {
      email,
      password,
    });
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }
}
