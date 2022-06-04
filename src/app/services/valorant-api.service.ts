import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseWeapon, ResponseAgent } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ValorantApiService {

  constructor(private http:HttpClient) {}

  getWeapons(): Observable<ResponseWeapon> {
    return this.http.get<ResponseWeapon>(`${environment.apiUrl}/weapons`);
  }

  getAgents(): Observable<ResponseAgent> {
    return this.http.get<ResponseAgent>(`${environment.apiUrl}/agents`);
  }
}
