import { Injectable } from '@angular/core';
import {Mydulieu} from './sanpham1';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  sanpham:Mydulieu[]=[
    {id:1,img:"../../assets/images/1012.jpg",name:'điện thoại',msp:'1',gia:50,mota:'hàng mới cập nhật',ng:'apple'},
    {id:2,img:"../../assets/images/1013.jpg",name:'ba lô A1232',msp:'2',gia:60,mota:'hàng Hot nhất',ng:'adidas'},
    {id:3,img:"../../assets/images/1027.jpg",name:'máy ảnh',msp:'3',gia:70,mota:'hàng cũ',ng:'sonny'},
  ]
  getALLcustomer(): Observable<Mydulieu[]> {
    return of (this.sanpham);
  }
  getCustomByID(id:number): Observable<Mydulieu>{
    return of(this.sanpham.find(d=>d.id==id))
  }
  
  constructor(private _service:SanphamService) { }

}
