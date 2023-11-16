import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { StudentService } from './student.service';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import { StudentVm } from './student-vm';
import { StudentComponent } from './student/student.component';

describe('StudentService', () => {
  let service: StudentService;
  let httpmocK:HttpTestingController;
  let client:HttpClient
  let component: StudentComponent
  let fixture:  ComponentFixture<StudentComponent>;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[StudentService,
      {
        provide: 'Url', 
          useValue: 'Url'
      }],
    });
    service = TestBed.inject(StudentService);
  httpmocK=TestBed.get(HttpTestingController);
  client=TestBed.inject(HttpClient)
  
  });
});
 