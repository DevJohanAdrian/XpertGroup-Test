import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/v1/users'; // Ajusta esta URL según tu backend
  private userId: string  = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`,  { username, password } );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`,  { username, password } );
  }

  getUser(userid: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/protected/${userid}`);
  }

  setUser(id: string) {
    this.userId = id;
    // Aquí iría la lógica de autenticación real
  }

  sharedUserId(): string{
    return this.userId;
  }
}
