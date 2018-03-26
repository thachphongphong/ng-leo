import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { GaleryComponent } from '../public/galery/galery.component';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { PhotoService } from '../services/photo.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from '../public/image/image.component';
import { MessageService } from '../services/message.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        HttpModule,
        HttpClientModule,
    ],
    declarations: [
      GaleryComponent,
      ImageComponent,
      ConfirmComponent
    ],
    providers: [
      PhotoService,
      MessageService,
      AlertService,
      AuthenticationService
    ],
    exports: [
      GaleryComponent
    ],
    entryComponents: [
      ImageComponent,
      ConfirmComponent
    ],
})
export class ShareModule { }
