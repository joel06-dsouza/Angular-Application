import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageerrorComponent } from './pageerror/pageerror.component';
import { ContactComponent } from './contact/contact.component';
import { CrossfeildComponent } from './crossfeild/crossfeild.component';
import { DynamicformarrayComponent } from './dynamicformarray/dynamicformarray.component';
import { BaseLogger, ConsoleLogger, DBLogger, FileLogger } from './services/logger';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { ReverseStringPipe } from './reversestringpipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    PageerrorComponent, ContactComponent, CrossfeildComponent, DynamicformarrayComponent, LoginComponent, ButtonComponent, ReverseStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,MatDividerModule, MatIconModule, MatButtonModule
  ],
  providers: [
    {provide: BaseLogger, useClass: ConsoleLogger},
    {provide: "1", useClass: FileLogger},
    {provide: "2", useClass: DBLogger}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
