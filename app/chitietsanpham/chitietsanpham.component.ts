import { Component, OnInit } from '@angular/core';
import {Mydulieu} from '../sanpham1';
import {SanphamService} from '../sanpham1.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietsanphamComponent implements OnInit {
  sanpham:Mydulieu;
  constructor(private route: ActivatedRoute,private _service:SanphamService, private location: Location ) { }
  onBack():void{
    this.location.back();
    }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.getCustomByID(id)
      .subscribe(data =>this.sanpham= data);
  }

}
