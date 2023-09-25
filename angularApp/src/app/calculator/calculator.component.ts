// calculator.component.ts
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})

export class CalculatorComponent {

    calculatorTitle : string = "Calculator Demo"

    num1 : number;
    num2 : number;
    result : number;

    _result1 : number;
    _result2 : number;

    constructor() {}

    @Output("add")
    eventEmitter : EventEmitter<any> = new EventEmitter<any>();

    Add() {
        this.result = this.num1 + this.num2;
        this._result1 = this.num1 + this.num2;
        console.log("Calc.component"+this._result1);
        this.eventEmitter.emit(this._result1);
    }  
    
    @Output("multiply")
    eventEmitter2 : EventEmitter<any> = new EventEmitter<any>();

    Multiply() {
        this.result = this.num1 * this.num2;
        this._result2 = this.num1 * this.num2;
        console.log("Calc Component: "+this._result2);
        this.eventEmitter2.emit(this._result2)
    }
}