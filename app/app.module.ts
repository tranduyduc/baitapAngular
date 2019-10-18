import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { GiohangComponent } from './giohang/giohang.component';
import { RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderModule} from'ngx-order-pipe';
import { FormHCNComponent } from './form-hcn/form-hcn.component';
import { FormIn4Component } from './form-in4/form-in4.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { AppcenterComponent } from './appcenter/appcenter.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { ChitietfimlComponent } from './chitietfiml/chitietfiml.component';
import { StudentmanagerComponent } from './studentmanager/studentmanager.component';






@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    SanphamComponent,
    ChitietsanphamComponent,
    GiohangComponent,
    FormHCNComponent,
    FormIn4Component,
    NhanvienComponent,
    AppcenterComponent,
    HttpApiComponent,
    ChitietfimlComponent,
    StudentmanagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {path: '', component:AppcenterComponent},

      {path: 'trangchu', component:TrangchuComponent},
      
      { path: 'sanpham', component: SanphamComponent },

      { path: 'chitiet/:id', component: ChitietsanphamComponent },

      { path: 'chitietsanpham', component: ChitietsanphamComponent },

      { path: 'giohang', component: GiohangComponent },

      { path: 'formHCN', component: FormHCNComponent },

      { path: 'formIn4', component: FormIn4Component },

      { path: 'nhanvien', component: NhanvienComponent },

      { path: 'api', component: HttpApiComponent },

      { path: 'student', component: StudentmanagerComponent },

      { path: 'chitietfiml/:url', component: ChitietfimlComponent },
    
      { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
      
      ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
