import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateMobilnostPayload } from '../natjecaj/create-natjecaj/create-mobilnost-payload';
import { MobilnostModel } from './mobilnost-model';

@Injectable({
  providedIn: 'root'
})
export class MobilnostService {

  constructor(private http: HttpClient) { }

  getAllMobilnosts(): Observable<Array<MobilnostModel>> {
    return this.http.get<Array<MobilnostModel>>('http://localhost:8080/api/mobilnost/');
  }

  createMobilnost(mobilnostPayload: CreateMobilnostPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/mobilnost/', mobilnostPayload);
  }

  getMobilnost(id: number): Observable<MobilnostModel> {
    return this.http.get<MobilnostModel>('http://localhost:8080/api/mobilnost/' + id);
  }

  getAllMobilnostsByUser(name: string): Observable<MobilnostModel[]> {
    return this.http.get<MobilnostModel[]>('http://localhost:8080/api/mobilnost/by-user/' + name);
  }
}