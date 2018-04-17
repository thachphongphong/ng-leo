import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {RoomService} from "../shared/room.service";
import { IRoom } from '../../share/room';
import { AlertService } from '../../services/alert.service';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { environment } from '../../../environments/environment';
import { RoomModalComponent } from '../../admin/room-modal/room-modal.component';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
  @Input() isLogin: boolean;
  @Input() mode: string;
  subscription: Subscription;
  bsModalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  public rooms$: IRoom[];
  
  constructor(private _roomService:RoomService, private messageService: MessageService, 
    private alertService: AlertService,private modalService: BsModalService  ) {  
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

  openEditWithComponent(room) {
    this.bsModalRef = this.modalService.show(RoomModalComponent,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
    console.log(room);
     this.bsModalRef.content.title = room.title;
     this.bsModalRef.content.desc = room.desc;
     this.bsModalRef.content.image = room.image;
     this.bsModalRef.content.id = room.id;
     this.bsModalRef.content.furniter = room.furniter;
     this.bsModalRef.content.quality = room.quality;
     this.bsModalRef.content.price = room.price;
  }

  showConfirmationModal(room) {
    // this.bsModalRef = this.modalService.show(ImageComponent,
    //   Object.assign({}, this.config, { class: 'gray modal-lg' })
    // );
    // this.bsModalRef.content.title = photo.title;
    // this.bsModalRef.content.category = photo.category;
    // this.bsModalRef.content.mode = 1;
    // this.bsModalRef.content.image = photo.image;
    // this.bsModalRef.content.id = photo.id;
  }

  getImageSrc(image) {
    return API_URL + '/images/' + image;
  }
}