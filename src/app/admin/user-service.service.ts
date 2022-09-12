import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/auth/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.usersUrl}/${id}`, { responseType: 'text' });
  }
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.usersUrl}/${id}`, value);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.usersUrl}/${id}`);
  }
}
