import { Component, OnInit } from '@angular/core';
import {Mydulieu} from '../sanpham1';
import {SanphamService} from'../sanpham1.service';
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  sanpham:Mydulieu[];
  constructor(private _service:SanphamService) { }

  ngOnInit() {
    this._service.getALLcustomer().subscribe(data =>this.sanpham=data);
  }
  

}
