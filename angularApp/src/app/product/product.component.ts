// product.component.ts
import { Component } from '@angular/core';
import { BaseLogger, ConsoleLogger } from '../services/logger';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  sumRes : number;
  mulRes : number;

  // logger: ConsoleLogger = new ConsoleLogger();
  logger: BaseLogger;

  constructor(baselog: BaseLogger) {
    this.logger = baselog;
    this.logger.log();
  }

  calc_add(sum: any) {
    this.sumRes = sum;
    console.log("product.component "+this.sumRes);
  }

  calc_mul(mul: any) {
    this.mulRes = mul;
    console.log("product.component "+this.mulRes);
  }
}
