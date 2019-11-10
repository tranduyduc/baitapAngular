import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ProductsService } from '../DAL/products.service';

@Component({
  selector: 'app-thi-online',
  templateUrl: './thi-online.component.html',
  styleUrls: ['./thi-online.component.css']
})
export class ThiOnlineComponent implements OnInit {

  //phan trang
  subject;  
  itemperpage = 1;
  currentpage = 1;
  page: number;
  totalPage() {
    if (this.subject.length % this.itemperpage === 0) {
      this.page = this.subject.length % this.itemperpage
    }
    else {
      this.page = (this.subject.length % this.itemperpage) + 1;
    }
  }
  nextPage() {
    if (this.currentpage * this.itemperpage < this.subject.length) {
      this.currentpage++;
    }
  }
  prevPage() {
    if (this.currentpage != 0) {
      this.currentpage--;
    }
  }
  firtPage() {
    this.currentpage = 1;
  }
  lastPage() {
    this.currentpage = this.page
  }

  //danh sach thi
  listsubjects;
  Id;
  question;
  quizzs:any;

  constructor(private route: ActivatedRoute,private http:HttpClient, private ps:ProductsService) { }

  ngOnInit() {
    this.ps.getAllCategories().subscribe(data=>{
      this.listsubjects=data
      this.route.paramMap.subscribe(p=>this.Id=p.get('Id'))
      this.listsubjects.find(p=>{
        if(p.Id===this.Id)
        {
          this.subject=p
        }
      })
      this.http.get(`../assets/db/Quizs/${this.Id}.json`).subscribe(data=>{
        this.question=data;
      })
    })
  }
}
