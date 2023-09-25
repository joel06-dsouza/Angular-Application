import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageerrorComponent } from "../pageerror/pageerror.component";
import { ProductComponent } from "./product.component";

const productroutes: Routes = [
    {path : '', component : ProductComponent},
    {path: '**', component: PageerrorComponent}
]

@NgModule({
    imports: [RouterModule.forChild(productroutes)],
    exports: [RouterModule]
  })

  export class ProductRoutingModule { }