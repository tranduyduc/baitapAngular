import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chitietfiml',
  templateUrl: './chitietfiml.component.html',
  styleUrls: ['./chitietfiml.component.css']
})
export class ChitietfimlComponent implements OnInit {

    fiml:any;

  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    const url= this.route.snapshot.paramMap.get('url');//lay tham so
    this.getFimlById(url).subscribe(data=>{
      this.fiml=data; 
    })
  }
  getFimlById(url:string){
    return this.http.get(url);
  }
}
