import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';


@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  constructor(private http:HttpClient) {}

  getWeapons(): Observable<Response> {
    return this.http.get<Response>(`${environment.apiUrl}`);
  }
}
