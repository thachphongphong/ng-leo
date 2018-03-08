import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ImageComponent } from '../image/image.component';
import { PhotoService } from '../../services/photo.service';
import { IPhoto } from '../../share/photo';
import { Observable } from 'rxjs/observable';
import { LeoRes } from '../../admin/models/leo-res';
import { environment } from '../../../environments/environment';
import { MessageService } from '../../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs';


const API_URL = environment.apiUrl;

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit, OnDestroy {
  public photos$: IPhoto[];
  bsModalRef: BsModalRef;
  subscription: Subscription;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private _imageService: PhotoService, private modalService: BsModalService, private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      let photo = message.get("UPLOAD_SUCCESS");
      if (photo != null) {
        // this.loadAllImages();
        this.photos$.push(photo);
      }
    });
  }

  ngOnInit() {
    this.loadAllImages();
  }

  loadAllImages() {
    this._imageService.getImages().subscribe(
      (res: LeoRes) => {
        if (res.success) {
          this.photos$ = res.data;
        }
      }
    )
  }

  openModalWithComponent(image) {
    this.bsModalRef = this.modalService.show(ImageComponent,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
    this.bsModalRef.content.title = 'Photo of LEO';
    this.bsModalRef.content.imageURL = this.getImageSrc(image);
  }

  getImageSrc(image) {
    return API_URL + '/images/' + image;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
