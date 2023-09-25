import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsercontrolComponent } from '../usercontrol/usercontrol.component';
import { CustomerDetailComponent } from './customer.customerdetail.component';

@NgModule({
  declarations: [CustomerComponent, UsercontrolComponent, CustomerDetailComponent],
  imports: [
    CommonModule, 
    CustomerRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
