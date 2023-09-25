import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Customer {
    id : number;
    Name : string;
    Amount : number;
    formCustomerGroup: FormGroup;

    constructor() {
        var _builder = new FormBuilder;
        this.formCustomerGroup = _builder.group({});

        this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));

        var validatorsCollection = [];

        validatorsCollection.push(Validators.required);
        validatorsCollection.push(Validators.pattern("^[0-9]{3,3}$"));

        this.formCustomerGroup.addControl("CustomerIDControl",new FormControl('', Validators.compose(validatorsCollection)));
    }

     
}