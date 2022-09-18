import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrijavaPayload } from './prijava-payload';

@Injectable({
  providedIn: 'root'
})

export class PrijavaService {
  
  constructor(private httpClient: HttpClient) { }

  getAllPrijaveForNatjecaj(natjecajId: number): Observable<PrijavaPayload[]> {
    return this.httpClient.get<PrijavaPayload[]>('http://localhost:8080/api/prijave/by-natjecaj/' + natjecajId);
  }

  postPrijava(prijavaPayload: PrijavaPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/prijave/', prijavaPayload);
  }
}