import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableModule }  from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableScrollDemo } from './table-scroll-demo.component';


@NgModule({
  declarations: [
    AppComponent,
	TableScrollDemo
	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	TableModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
