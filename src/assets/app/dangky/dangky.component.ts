import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {

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
