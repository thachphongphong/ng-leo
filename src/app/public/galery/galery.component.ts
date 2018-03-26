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
import { ConfirmComponent } from '../../share/confirm/confirm.component';
import { AlertService } from '../../services/alert.service';


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

  constructor(private _photoService: PhotoService, private modalService: BsModalService, private messageService: MessageService, private alertService: AlertService) {
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
    this._photoService.getImages().subscribe(
      (res: LeoRes) => {
        if (res.success) {
          this.photos$ = res.data;
        }
      }
    )
  }

  openModalWithComponent(photo) {
    this.bsModalRef = this.modalService.show(ImageComponent,
      Object.assign({}, this.config, { class: 'gray modal-lg' })
    );
    this.bsModalRef.content.title = photo.title;
    this.bsModalRef.content.imageURL = this.getImageSrc(photo.image);
  }

  getImageSrc(image) {
    return API_URL + '/images/' + image;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  deleteImg(photo){
    this._photoService.delImage(photo).subscribe(
      (res: LeoRes) => {
        if (res.success) {
          let p = res.data;
          this.photos$ = this.photos$.filter(item => item.id != p.id);
        }
      },
      err => {
          this.alertService.error(err.error);
      }
    );
  }

  showConfirmationModal(photo): void {
    const modal = this.modalService.show(ConfirmComponent);
    (<ConfirmComponent>modal.content).showConfirmationModal(
        'Delete photo',
        'Are you sure to delete this photo?'
    );

    (<ConfirmComponent>modal.content).onClose.subscribe(result => {
        if (result === true) {
          this.deleteImg(photo);
        } else if(result === false) {
            // when pressed No
        } else {
            // When closing the modal without no or yes
        }
    });
}

}
