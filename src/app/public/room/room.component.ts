import { Component } from '@angular/core';
import {RoomService} from "../shared/room.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  rooms:any[] = [];
  constructor(private _roomService:RoomService ) {
    this.rooms = this._roomService.getRooms();
    console.log(this.rooms);
  }

}
