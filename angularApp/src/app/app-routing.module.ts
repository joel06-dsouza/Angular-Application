import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { PageerrorComponent } from './pageerror/pageerror.component';
import { ContactComponent } from './contact/contact.component';
import { CrossfeildComponent } from './crossfeild/crossfeild.component';
import { DynamicformarrayComponent } from './dynamicformarray/dynamicformarray.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'button', component : ButtonComponent},
  {path : 'crossfeild', component : CrossfeildComponent},
  {path : 'dynamicformarray', component : DynamicformarrayComponent},
  {path : 'login', component : LoginComponent},
  // {path : 'product', component : ProductComponent},
  {path : 'product', loadChildren : ()=> import('./product/product.module').then(p=>p.ProductModule)},
  // {path : 'customer', component : CustomerComponent},
  {path : 'customer', loadChildren : ()=> import('./customer/customermodule.module').then(p=>p.CustomerModule), canActivate: [AuthGuard]},
  // {path : 'customer', loadChildren : ()=> import('./customer/customermodule.module').then(p=>p.CustomerModule)},
  {path : '**', component : PageerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
