import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  isLogin: boolean;
  mode = "EDIT";

  constructor(private messageService: MessageService, private alertService: AlertService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(
      (res: boolean) =>{
        this.isLogin = res;
      }
    );
  }
  onChange(roomName) {
    this.messageService.sendMessage("ROOM_SELECT", roomName);
  }
}
