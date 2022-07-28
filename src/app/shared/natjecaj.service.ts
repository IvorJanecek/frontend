import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateNatjecajPayload } from '../natjecaj/create-natjecaj/create-natjecaj-payload';
import { NatjecajModel } from './natjecaj-model';

@Injectable({
  providedIn: 'root'
})
export class NatjecajService {

  constructor(private http: HttpClient) { }

  getAllNatjecajs(): Observable<Array<NatjecajModel>> {
    return this.http.get<Array<NatjecajModel>>('http://localhost:8080/api/natjecajs/');
  }

  createNatjecaj(natjecajPayload: CreateNatjecajPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/natjecajs/', natjecajPayload);
  }

  getNatjecaj(id: number): Observable<NatjecajModel> {
    return this.http.get<NatjecajModel>('http://localhost:8080/api/natjecajs/' + id);
  }

  getAllNatjecajsByUser(name: string): Observable<NatjecajModel[]> {
    return this.http.get<NatjecajModel[]>('http://localhost:8080/api/natjecajs/by-user/' + name);
  }
}