import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from '../../services/message.service';
import { AlertService } from '../../services/alert.service';
import { environment } from '../../../environments/environment.prod';
import { Room } from '../../share/room';
import { RoomService } from '../../public/shared/room.service';
import { LeoRes } from '../models/leo-res';

const API_URL = environment.apiUrl;
@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.component.html',
  styleUrls: ['./room-modal.component.css']
})
export class RoomModalComponent implements OnInit {
  title: String; 
  desc: String; 
  image: String; 
  id: number; 
  furniter: String[]; 
  quality: number; 
  price: number; 

  constructor(public bsModalRef: BsModalRef, private roomService: RoomService,
    private messageService: MessageService, private alertService: AlertService) {}

  ngOnInit() {
  }

  editRoom(){
    let room = new Room(this.id, this.title, this.desc, this.furniter, this.quality, this.price, this.image);
    this.roomService.editRoom(room).subscribe(
      (res: LeoRes) => {
        if (res.success) {
          let p = res.data;
          this.messageService.sendMessage("EDIT_ROOM_SUCCESS",res.data);
        }
      },
      err => {
          this.alertService.error(err.error);
      }
    );
    this.bsModalRef.hide();
  }
  
}
