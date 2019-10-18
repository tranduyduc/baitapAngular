import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-studentmanager',
  templateUrl: './studentmanager.component.html',
  styleUrls: ['./studentmanager.component.css']
})
export class StudentmanagerComponent implements OnInit {

  showFormEdit: boolean = false;//ẩn hiện
  formStudent = {
    id: 0,
    fullName: '',
    birthday: new Date().toISOString().substring(0, 10),
    mark: 0,
  };
  students: Student[] = [
    {
      id: 1,
      fullName: 'Nguyễn văn tèo',
      birthday: new Date(2019, 6, 30),
      mark: 8
    },
    {
      id: 2,
      fullName: 'Phan thị nở',
      birthday: new Date(2019, 2, 29),
      mark: 8
    },
  ];


  constructor() { }

  ngOnInit() {
  }
  trueEdit(student: Student) {
    this.showFormEdit = true;
    this.formStudent.id=student.id;
    this.formStudent.fullName=student.fullName;
    this.formStudent.mark=student.mark;
  }
  
  //xep loai
  gradeStudent(student: Student) {
    if (student.mark >= 0 && student.mark < 5) {
      return 'Yếu/Kém'
    } else {
      if (5 <= student.mark && student.mark <= 8)
       return 'Trung bình/Khá'
      if (student.mark > 8)
       return 'Giỏi/Xuất sắc'
    }
  }

}
