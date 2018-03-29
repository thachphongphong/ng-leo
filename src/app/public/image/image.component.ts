import { Component, ViewChild, ElementRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PhotoService } from '../../services/photo.service';
import { LeoRes } from '../../admin/models/leo-res';
import { MessageService } from '../../services/message.service';
import { AlertService } from '../../services/alert.service';
import { Photo } from '../../share/photo';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'modal-content',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  id: number; 
  category: String; 
  title: String; 
  image: String;
  mode: number;
  constructor(public bsModalRef: BsModalRef, private _photoService: PhotoService, 
    private messageService: MessageService, private alertService: AlertService) {}

  editPhoto(){
    let photo = new Photo(this.id, this.category, this.title, this.image);
    this._photoService.editPhoto(photo).subscribe(
      (res: LeoRes) => {
        if (res.success) {
          let p = res.data;
          this.messageService.sendMessage("EDIT_SUCCESS",res.data);
        }
      },
      err => {
          this.alertService.error(err.error);
      }
    );
    this.bsModalRef.hide();
  }

  getImageSrc(image) {
    return API_URL + '/images/' + image;
  }
}
