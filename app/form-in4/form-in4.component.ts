import { Component, OnInit, RootRenderer } from '@angular/core';

@Component({
  selector: 'app-form-in4',
  templateUrl: './form-in4.component.html',
  styleUrls: ['./form-in4.component.css']
})
export class FormIn4Component implements OnInit {
  
  in4={
    name:null,
    date:null,
    male:null,
    mark:0,
    TB:"Rot",
  }
  constructor() { }

  ngOnInit() {
  }
  tinh(){
    if(this.in4.mark<5)
      this.in4.TB="rot";
    else
    this.in4.TB="dau";
    return this.in4.TB;
  }
}
