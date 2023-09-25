import { Component } from '@angular/core';
import { Customer } from './customer.model';
import { CustomerRestService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {
  
  custObject : Customer = new Customer();
  
  customers : Array<Customer> = new Array<Customer>();

  loginUsername : string = "";


  
  constructor(private customerRestService: CustomerRestService, private router: Router) {
    this.loadCustomers();
    this.loginUsername = JSON.parse(localStorage.getItem("UserName") || "")
    // this.custObject.Id = "101";
    // this.custObject.Name = "Joel";
    // this.custObject.Amount = 2000;


    // let cust1:Customer = new Customer(); 
    //   cust1.Id = "102";
    //   cust1.Name = "A";
    //   cust1.Amount = 1200;

    // let cust2:Customer = new Customer();
    //   cust2.Id = "103";
    //   cust2.Name = "B";
    //   cust2.Amount = 3200;
    
    //   let cust3:Customer = new Customer();
    //   cust3.Id = "104";
    //   cust3.Name = "C";
    //   cust3.Amount = 1400;

    // this.customers.push(cust1);
    // this.customers.push(cust2);
    // this.customers.push(cust3);

  } 

  loadCustomers() {
    return this.customerRestService.getCustomers().subscribe((data: Customer[]) => {
      // console.log(data);
      // this.customers = data;

      this.customers = new Array<Customer>();
      for(let item of data){
        let cust: Customer = new Customer();
        cust.id = item.id;
        cust.Name = item.Name;
        cust.Amount = item.Amount;
        this.customers.push(cust);
      }
    }); 
  }

  // demo(){
  //   window.alert("Hello")
  // }

  // clears the c
  clear() {
    this.custObject = new Customer();
  }

  add() {
    this.customers.push(this.custObject);
    this.clear();
  }

  select(selectedCustomer : Customer) {
    // this.custObject = selectedCustomer;   object reference
    this.custObject = Object.assign({}, selectedCustomer);  // Object cloning
  }
  
  update(){
    // check in customer array id  value
    // if id value not exist display message in alert
    
    //if id value exist the modify value of custname and amount 
    
    // clear textboxes
    const customerToUpdateIndex = this.customers.findIndex(customer => customer.id === this.custObject.id);
    
    if (customerToUpdateIndex !== -1) {
      this.customers[customerToUpdateIndex].Name = this.custObject.Name;
      this.customers[customerToUpdateIndex].Amount = this.custObject.Amount;
      this.clear(); // Clear textboxes
    } else {
      alert(`Customer with ID ${this.custObject.id} does not exist.`);
    }
    
  }
  
  
  delete() {
    if (this.custObject.id) {
      const index = this.customers.findIndex(item => item.id === this.custObject.id);
      
      if (index !== -1) {
        this.customers.splice(index, 1); // Remove the customer from the array
        // this.clear();
        this.custObject = new Customer();
      } else {
        window.alert("Customer with the specified ID not found.");
      }
    } else {
      window.alert("Please select a customer to delete.");
    }
  }
  
  
  hasError(typeofvalidator: string, controlname: string) : boolean 
  {
    return this.custObject
    .formCustomerGroup
    .controls[controlname]
    .hasError(typeofvalidator)
  }
  
  posttoServer() {
    var customerdto: any ={};
    customerdto.id = this.custObject.id;
    customerdto.Name = this.custObject.Name;
    customerdto.Amount = this.custObject.Amount;
  
    this.customerRestService.createCustomers(customerdto).subscribe((data: {}) => {
      window.alert('data inserted!!!')
    });
    this.loadCustomers();
  
  }     

  deletefromServer(){
    let id = this.custObject.id;

    this.customerRestService.deleteCustomer(id).subscribe((data: {})=>{
      window.alert("data deleted")
    });

    this.loadCustomers()
  }


  updatetoServer() {
    var customerdto: any = {};
    customerdto.id = this.custObject.id;
    customerdto.Name = this.custObject.Name;
    customerdto.Amount = this.custObject.Amount;

    this.customerRestService.updateCustomers(customerdto.id, customerdto).subscribe((data: {}) => {
      window.alert('Data Updated');
    });

    this.loadCustomers();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("UserName");
    this.router.navigate(['login'])
  }
}  

