import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { CalculatorComponent } from '../calculator/calculator.component';

@NgModule({
  declarations: [ProductComponent, CalculatorComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  bootstrap: [ProductModule]
})
export class ProductModule { }
