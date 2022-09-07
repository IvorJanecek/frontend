import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NatjecajModel } from './natjecaj-model';

@Injectable({
  providedIn: 'root'
})
export class NatjecajService {
  constructor(private http: HttpClient) { }

  getAllNatjecajs(): Observable<Array<NatjecajModel>> {
    return this.http.get<Array<NatjecajModel>>('http://localhost:8080/api/natjecaj');
  }

  createNatjecaj(natjecajModel: NatjecajModel): Observable<NatjecajModel> {
    return this.http.post<NatjecajModel>('http://localhost:8080/api/natjecaj',
      natjecajModel);
  }

  getNatjecaj(id: number): Observable<NatjecajModel> {
    return this.http.get<NatjecajModel>('http://localhost:8080/api/natjecaj/' + id);
  }
}