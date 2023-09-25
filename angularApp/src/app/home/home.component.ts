import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseLogger, ConsoleLogger } from '../services/logger';

@Component({
    selector: 'home-ui',
    templateUrl: './home.component.html',
  })

  export class HomeComponent {

    // logger: ConsoleLogger = new ConsoleLogger();
    logger: BaseLogger;

    // constructor(private router : Router, _logger: BaseLogger) {
    //   this.logger = _logger;
    //   this.logger.log();
    // }

    constructor(private router : Router, _injector: Injector) {
      this.logger = _injector.get("1");
      this.logger.log();
    }
    
     loadCustomer() {
      this.router.navigate(['customer']);
     }
  }