import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {

  constructor(private location: Location) { }
  onBack():void{
    this.location.back();
    }
  ngOnInit() {
  }

}
