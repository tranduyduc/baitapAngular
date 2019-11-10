import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  
  formStudent = {
    fullName: null,
    birthday: new Date().toISOString().substring(0, 10),
    gender:'nam',
    username:null,
    password:null,
    email:null,
    schoolfee:null,
    mark:0,
  };

  constructor() { }

  ngOnInit() {
  }

}
