import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobilnostModel } from './mobilnost-model';

@Injectable({
  providedIn: 'root'
})
export class MobilnostService {
  constructor(private http: HttpClient) { }

  getAllMobilnosts(): Observable<Array<MobilnostModel>> {
    return this.http.get<Array<MobilnostModel>>('http://localhost:8080/api/mobilnost');
  }

  createMobilnost(mobilnostModel: MobilnostModel): Observable<MobilnostModel> {
    return this.http.post<MobilnostModel>('http://localhost:8080/api/mobilnost',
      mobilnostModel);
  }
}