// crossfeild.component.ts
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from './room.interface';
import { RoomOver18Validator } from './room.validator';

@Component({
  selector: 'app-crossfeild',
  templateUrl: './crossfeild.component.html',
  styleUrls: ['./crossfeild.component.css']
})
export class CrossfeildComponent {

  profileForm: FormGroup;

  room: Room[] = [
    { text: 'room 1', value: 'room-1'},
    { text: 'room 2', value: 'room-2'},
    { text: 'room 3', value: 'room-3'}
  ]

  constructor(private formBuilder: FormBuilder,private roomOver18Validator:RoomOver18Validator) {

  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      room: [{}, Validators.required],
      age: ['', [Validators.required, NoNegativeNumbers]],
    },
    {
      validators : [this.roomOver18Validator.onlyAccessRoomsOver18(18)],
      updateOn: 'blur',
    }
    );
  }

}

//custom validation function
export function NoNegativeNumbers(control: AbstractControl) {
  return control.value < 0 ? {negativeNumbers: true} : null;
}

