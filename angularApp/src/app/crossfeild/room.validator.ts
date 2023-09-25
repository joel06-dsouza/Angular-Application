// room.validator.ts

import { Injectable } from "@angular/core";
import { FormGroup, ValidatorFn } from "@angular/forms";

@Injectable({ providedIn: 'root'})
export class RoomOver18Validator {
    public onlyAccessRoomsOver18(minAge: number): ValidatorFn{
        return (formGroup : FormGroup) => {
            const ageControl = formGroup.get('age');
            const roomControl = formGroup.get('room');

            const ageValue = ageControl.value;
            const roomValue = roomControl.value;


            if(ageValue >= minAge) {
                return null;
            }

            if(roomValue === 'room-1' || roomValue === 'room-2' || roomValue === 'room-3') {
                return { roomOnlyWith18: true}
            }
            return null;
        };


    }
}


