import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { GiohangComponent } from './giohang/giohang.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    SanphamComponent,
    ChitietsanphamComponent,
    GiohangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([

      { path: '',component: TrangchuComponent },
      
      {path: 'trangchu', component:TrangchuComponent},
      
      { path: 'sanpham', component: SanphamComponent },

      { path: 'chitiet/:id', component: ChitietsanphamComponent },

      { path: 'chitietsanpham', component: ChitietsanphamComponent },

      { path: 'giohang', component: GiohangComponent },
    
      { path: '**', redirectTo: 'trangchu', pathMatch: 'full' },
      
      ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
