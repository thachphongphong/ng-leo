import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from '../../services/message.service';
import { AlertService } from '../../services/alert.service';
import { environment } from '../../../environments/environment.prod';

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
  id: String; 
  furniter: String[]; 
  quality: String; 
  price: String; 

  constructor(public bsModalRef: BsModalRef,
    private messageService: MessageService, private alertService: AlertService) {}

  ngOnInit() {
  }
}
