import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequest} from '../Modules/RegisterRequest';
import {AuthResponse} from '../Modules/AuthResponse';
import {Observable} from 'rxjs';
import {API_URL} from '../constants/api_urls';
import {LoginRequest} from '../Modules/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  constructor(private http: HttpClient  ) {
  }

  register(model:RegisterRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(API_URL.register, model);
  }
  login(model:LoginRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(API_URL.login, model);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');

  }

  }
