import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { StudentVm } from '../student-vm';
import { HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import { StudentComponent } from './student.component';
import { RouterTestingModule } from '@angular/router/testing';
import { delay, of } from 'rxjs';


describe('StudentService', () => {
  let service: StudentService;
  let httpmocK:HttpTestingController;
  let client:HttpClient
  let component: StudentComponent
  let fixture:  ComponentFixture<StudentComponent>;
 
  let httpTestingController: HttpTestingController;
  const  dummydata:  StudentVm[] = [{
    Id:'1',
      StudentName:'anilkumar',
      FName:'chandraiah',
      MName:'swarupa',
      ContactNo:'9676852654'
      }, {
        Id:'2',
        StudentName:'anilkumar',
        FName:'chandraiah',
        MName:'swarupa',
        ContactNo:'9676852654'
        }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
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

//   it('it call all post Details return []',()=>
//   {
//     let fixture=TestBed.createComponent(StudentComponent)
//     let component=fixture.debugElement.componentInstance();
//     let appservice=fixture.debugElement.injector.get(StudentService);
//     let stud=spyOn(appservice,"getstudent").and.callFake(()=>
//     {
//       return of([]).pipe(delay(300));
//     })
//     component.getstudent();
//     expect(component.showloadingindicator).toEqual(true);
//     expect(component.showloadingindicator).toEqual(false);
//     expect(component.getstudent).toEqual([]); 
//  })
//   it('details get by studentId',()=>
//   {
//     let fixture=TestBed.createComponent(StudentComponent)
//     let component=fixture.debugElement.componentInstance();
//     let appservice=fixture.debugElement.injector.get(StudentService);
//     let stud=spyOn(appservice,"getStudentById").and.callFake(()=>
//     {
//       return of([]).pipe(delay(300));
//     })
//     component.getStudentById('1');
//     expect(component.showloadingindicator).toEqual(true);
//     expect(component.showloadingindicator).toEqual(false);
//     expect(component.getstudent).toEqual([]); 
//   })

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// //   it('be able to retrieve student data from the API via GET', () => {
// //     const  dummydata:  StudentVm[] = [{
// //         Id:'1',
// //         StudentName:'anilkumar',
// //         FName:'chandraiah',
// //         MName:'swarupa',
// //         ContactNo:'9676852654'
// //         }, {
// //           Id:'2',
// //           StudentName:'anilkumar',
// //           FName:'chandraiah',
// //           MName:'swarupa',
// //           ContactNo:'9676852654'
// //           }];
// //     service.getstudent().subscribe(posts => {
// //         expect(posts.length).toBe(2);
// //         expect(posts).toEqual(dummydata);
// //     });
// // });
// it('get all Students',()=>
// {
//   service.getstudent().subscribe(res=>
//     {
//      expect(res).toEqual(dummydata);
//      expect(dummydata.length).toBe(2);
//     });

//     // const res=httpTestingController.expectOne('Url');
//     // expect(res.request.method).toBe('Get');
//     // expect(res.cancelled).toBeFalsy();
//     // expect(res.request.responseType).toEqual('json');
//     // res.flush(dummydata);
//     // httpTestingController.verify();
// });
// it('get by student id ',()=>
// {
// service.getStudentById('1').subscribe(res=>
//   {
//    expect(res).toEqual(dummydata);
//   })
//   const res=httpTestingController.expectOne('Url/1');
//   expect(res.request.method).toBe('get');
// })
// });


 



// describe('StudentComponent', () => {
//   let component: StudentComponent;
//   let fixture: ComponentFixture<StudentComponent>;
//   let service:StudentService;
//   let httpTestingController: HttpTestingController;
//   const  dummydata:  StudentVm[] = [{
//     Id:'1',
//       StudentName:'anilkumar',
//       FName:'chandraiah',
//       MName:'swarupa',
//       ContactNo:'9676852654'
//       },
//        {
//         Id:'2',
//         StudentName:'anilkumar',
//         FName:'chandraiah',
//         MName:'swarupa',
//         ContactNo:'9676852654'
//         }];

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ StudentComponent ],
//       providers:[FormBuilder,HttpClientModule,HttpClient,{
//         provide:StudentService
//       }]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(StudentComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   beforeEach(() => {
//     TestBed.configureTestingModule({ 
//       providers: [ 
//           StudentService, 
//         {
//            provide: 'Url', 
//           useValue: 'Url'
//         }],
       
//      });
//      service = TestBed.inject(StudentService);
//      httpTestingController=TestBed.get(httpTestingController);
//   });
//   afterEach(()=>
//   {
//      httpTestingController.verify();
//   });
//   // it('get all Students',()=>
//   // {
//   //   service.getstudent().subscribe(res=>
//   //     {
//   //      expect(res).toEqual(dummydata);
//   //      expect(dummydata.length).toBe(2);
//   //     });
//   //     const res=httpTestingController.expectOne('Url');
//   //     expect(res.request.method).toBe('Get');
//   //     expect(res.cancelled).toBeFalsy();
//   //     expect(res.request.responseType).toEqual('json');
//   //     res.flush(dummydata);
//   //     httpTestingController.verify();
//   // })
// });
 
 });
