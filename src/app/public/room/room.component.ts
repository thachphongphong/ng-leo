import { Component, Input, OnInit } from '@angular/core';
import {RoomService} from "../shared/room.service";
import { IRoom } from '../../share/room';
import { AlertService } from '../../services/alert.service';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
  @Input() isLogin: boolean;
  @Input() mode: string;
  subscription: Subscription;

  public rooms$: IRoom[];
  
  constructor(private _roomService:RoomService, private messageService: MessageService, private alertService: AlertService ) {  
  }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.rooms$ = this._roomService.getRoom(message.get("ROOM_SELECT"));
    });

    if(this.mode=='EDIT'){
      this.rooms$ = this._roomService.getRoom("Double Room");
    }else{
      this.rooms$ = this._roomService.getRooms();
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
