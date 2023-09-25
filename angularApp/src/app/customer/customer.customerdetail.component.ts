// customer.customerdetail.component.ts

import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Customer } from "./customer.model";
import { CustomerRestService } from "../services/customer.service";

@Component({
    selector: 'app-detail',
    templateUrl: 'customer.customerdetail.component.html'
})

export class CustomerDetailComponent {
    id: number;
    msg : string = '';
    custObject : Customer = new Customer();

    constructor(private route:  ActivatedRoute, private customerRestService: CustomerRestService) {
        this.route.params.subscribe(params => this.id = params['id']);
        this.getCustomerById(this.id)
    }

    getCustomerById(id) {    
        return this.customerRestService.getCustomer(id).subscribe((data: Customer) => {
          this.custObject = data;
        });
      }
}