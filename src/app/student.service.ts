import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentVm } from './student-vm';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Url = 'https://localhost:44345/Api/student'

  constructor(private http: HttpClient) { }

  // getstudent(): Observable<StudentVm[]> {
  //   return this.http.get<StudentVm[]>(this.Url + '/GetStudentData') 
  // }
  // createstudent(student: StudentVm): Observable<StudentVm> {
  //   debugger;
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post<StudentVm>(this.Url + '/studentInsert', student, httpOptions); 
  // }
  // updatestudent(student: StudentVm): Observable<StudentVm> {
  //   debugger;
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post<StudentVm>(this.Url + '/studentInsert', student, httpOptions); 
  // } 
  // DeleteStudent(StudentId: string): Observable<number> { 
  //   debugger;
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
  //   return this.http.get<number>(this.Url + '/DeleteStudent?Id=' + StudentId, httpOptions);
  // }
  // getStudentById(StudentId: string): Observable<StudentVm[]> {
  //   return this.http.get<StudentVm[]>(this.Url + '/GetStudentById?Id=' + StudentId);
  // }

}
