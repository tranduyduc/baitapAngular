import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {

  url='https://swapi.co/api/films/';
  infoFiml:any;
  ListFiml:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllFiml().subscribe(data=>{
      this.infoFiml=data;
      this.ListFiml=this.infoFiml.results;  
    })
  }
  getAllFiml(){
    return this.http.get(this.url);
  }
}
 