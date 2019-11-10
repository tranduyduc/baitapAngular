import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../DAL/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {

  listsubject:any;
  itemperpage= 4;
  currentpage= 1;
  page:number;

  totalPage(){
    if(this.listsubject.length % this.itemperpage === 0){
      this.page=this.listsubject.length % this.itemperpage
    }
    else{
      this.page = (this.listsubject.length % this.itemperpage)+1;
    }
  }

  nextPage(){
    if(this.currentpage * this.itemperpage < this.listsubject.length){
      this.currentpage++;
    }
  }
  
  prevPage(){
    if(this.currentpage !=0){
      this.currentpage--;
    }
  }

  firtPage(){
    this.currentpage=1;
  }

  lastPage(){
    this.currentpage = this.page
  }

  constructor(private productsservice: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsservice.getAllCategories().subscribe(data => {
      this.listsubject = data;
    })
  }

}