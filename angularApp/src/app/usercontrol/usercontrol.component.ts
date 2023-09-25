import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usercontrol',
  templateUrl: './usercontrol.component.html'
})

export class UsercontrolComponent {
    @Input("grid-title")
    gridTitle : string = "";

    gridData: Array<any> = new Array<any>();

    gridCols: Array<any> = new Array<any>();

    @Input("grid-data")
    set gridDataSet(_gridData:Array<any>) {
      if (_gridData.length > 0) {
        if (this.gridCols.length == 0) {
          var colnames = Object.keys(_gridData[0]);
          for (var index in colnames) {
            this.gridCols.push(colnames[index]);
            console.log(index + " = " +colnames[index])
          }
        }
      }
      this.gridData = _gridData;
      console.log(this.gridData);
    }

    @Output("grid-selector")
    eventemitter : EventEmitter<any> = new EventEmitter<any>();
    
    SelectedRecord(_selectedObj: any) {
      console.log(_selectedObj);
      this.eventemitter.emit(_selectedObj);
    }
 }
