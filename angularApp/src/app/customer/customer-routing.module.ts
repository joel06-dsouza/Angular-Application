import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";
import { PageerrorComponent } from "../pageerror/pageerror.component";
import { CustomerDetailComponent } from "./customer.customerdetail.component";

const customerroutes: Routes = [
    {path : '', component : CustomerComponent},
    {path : 'customer', component: CustomerComponent},
    {path : ':id', component: CustomerDetailComponent},
    {path: '**', component: PageerrorComponent}
]

@NgModule({
    imports: [RouterModule.forChild(customerroutes)],
    exports: [RouterModule]
  })

  export class CustomerRoutingModule { }