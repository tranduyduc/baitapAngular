import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllCategories(){
    return this.http.get('/assets/db/Subjects.json');
  }
  getAllProducts(){
    return this.http.get('/assets/db/Students.json');
  }
}
