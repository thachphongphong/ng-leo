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
      ImageComponent

    ],
    providers: [
      PhotoService,
      MessageService
    ],
    exports: [
      GaleryComponent
    ],
    entryComponents: [
      ImageComponent
    ],
})
export class ShareModule { }
