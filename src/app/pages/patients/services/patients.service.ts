import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<any> {
    let m = localStorage.getItem('user');
    let user = JSON.parse(m as string);
    return this.http.get(environment.url + 'patients/' + user.id);
  }

  addPatients(data: any) {
    let m = localStorage.getItem('user');
    let user = JSON.parse(m as string);
    data.userId = user.id;
    return this.http.post(environment.url + 'create_patient', data);
  }

  delete(data : any) {
    let m = localStorage.getItem('user');
    let user = JSON.parse(m as string);
    return this.http.delete(environment.url + 'patient/' + user.id, data);
  }
}
