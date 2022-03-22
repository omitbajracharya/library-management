import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {StudentInterface} from '../interfaces/student-interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public postStudent(data : StudentInterface){ 
    return this.http.post<any>("http://localhost:3000/posts", data);
  }
}
