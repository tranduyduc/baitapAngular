import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-hcn',
  templateUrl: './form-hcn.component.html',
  styleUrls: ['./form-hcn.component.css']
})
export class FormHCNComponent implements OnInit {

  hcn={
    cd:null,
    cr:null,
    dt:null,
    cv:null,
  }

  constructor() { }

  ngOnInit() {
  }

  tinh(){
    this.hcn.dt=this.hcn.cd*this.hcn.cr;
    this.hcn.cv=(this.hcn.cd+this.hcn.cr)*2;
  }
}
