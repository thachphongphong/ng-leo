import { Component } from '@angular/core';
import {ImageService} from "../shared/image.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {

  images:any[] = [];
  bsModalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private _imageService:ImageService, private modalService: BsModalService ) {
    this.images = this._imageService.getImages()
  }

  openModalWithComponent(imageURL) {
    this.bsModalRef = this.modalService.show(ImageComponent,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
    this.bsModalRef.content.title = 'Photo of LEO';
    this.bsModalRef.content.imageURL = imageURL;
  }
}
