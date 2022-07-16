import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  viewcourse=()=>{this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")}

Addcourse(course:any){
  return this.http.post<any>('http://mylinkurcodesapp.herokuapp.com/Addcourse',course);
}
}
