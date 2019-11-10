import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { GopyComponent } from './gopy/gopy.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ThiOnlineComponent } from './thi-online/thi-online.component';
import { DangkyComponent } from './dangky/dangky.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    GioithieuComponent,
    LienheComponent,
    GopyComponent,
    HoidapComponent,
    ThiOnlineComponent,
    DangkyComponent,
    DangnhapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path: '', component:DangnhapComponent},
      {path: 'dangnhap', component:DangnhapComponent},
      {path: 'trangchu', component:TrangchuComponent},
      {path: 'gioithieu', component:GioithieuComponent},
      {path: 'hoidap', component:HoidapComponent},
      {path: 'gopy', component:GopyComponent},
      {path: 'lienhe', component:LienheComponent},
      {path: 'dangky', component:DangkyComponent},
      {path: 'thionline/:id', component:ThiOnlineComponent},
      {path: 'thionline', component:ThiOnlineComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
