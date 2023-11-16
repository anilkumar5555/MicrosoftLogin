import { Component, OnInit } from '@angular/core';
import { StudentVm } from '../student-vm';
import { StudentService } from '../student.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  dataSaved = false;
  message: string;
  FromStudent: any;
  StudentidUpdate:any;
  allStudent: Observable<StudentVm[]>;
  massage: any;

  constructor(private formbuilder: FormBuilder, private studentservices: StudentService) { }

  ngOnInit(): void {
    // this.FromStudent = this.formbuilder.group({
    //   Id: ['', [Validators.required]],
    //   StudentName: ['', [Validators.required]],
    //   FName: ['', [Validators.required]],
    //   MName: ['', [Validators.required]],
    //   ContactNo: ['', [Validators.required]],
    // });
    // this.loadAllstudents();
  }
//   loadAllstudents() {
//     this.allStudent = this.studentservices.getstudent();
//   }
//   Submit() {
//     this.dataSaved = false;
//     const stu = this.FromStudent.value;
//     this.CreateStudent(stu);
//     this.FromStudent.reset();
//   }
//   CreateStudent(studentvm: StudentVm) {
//     if (this.StudentidUpdate == null) {
//       this.studentservices.createstudent(studentvm).subscribe(() => {
//         this.dataSaved = true;
//         this.massage = "data saved successfully";
//         this.loadAllstudents();
//         this.StudentidUpdate = null;
//         this.FromStudent.reset();
//       });
//     }
//     else {
//       studentvm.Id = this.StudentidUpdate;
//       this.studentservices.updatestudent(studentvm).subscribe(() => {
//         this.dataSaved = true;
//         this.massage = "data updated successfully";
//         this.loadAllstudents();
//         this.StudentidUpdate = null;
//         this.FromStudent.reset();
//       })
//     }

//   }


//   StudentEdit(StudentId:any)
//   {
//     debugger;
// this.studentservices.updatestudent(StudentId).subscribe(Response=>{
//   this.massage = null;
//   this.dataSaved=false;
//   this.StudentidUpdate=Response.Id;
//   this.FromStudent.controls['StudentName'].setValue(Response.StudentName);
//   this.FromStudent.controls['FName'].setValue(Response.FName);
//   this.FromStudent.controls['MName'].setValue(Response.MName);
//   this.FromStudent.controls['ContactNo'].setValue(Response.ContactNo);
// });

//   } 
//   DeleteStudent(StudentId: string) {
//     debugger
//     if (confirm("Are You Sure To Delete this Informations")) {
//       this.studentservices.DeleteStudent(StudentId).subscribe(
//         () => {
//           this.dataSaved = true;
//           this.message = "Deleted Successfully";
//           this.loadAllstudents();
//         });
//     }
//   }

//   Reset() {
//     this.FromStudent.reset();
//   }

}
