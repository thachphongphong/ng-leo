import {ModuleWithProviders, NgModule} from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/bs-dropdown.module';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover/popover.module';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HttpClientModule } from '@angular/common/http/src/module';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleryComponent } from './galery/galery.component';
import { ImageComponent } from './image/image.component';
import { FilterPipe } from './shared/filter.pipe';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { GuideComponent } from './guide/guide.component';
import { BlogComponent } from './blog/blog.component';
import { ImageService } from './shared/image.service';
import { RoomService } from './shared/room.service';
import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    PopoverModule.forRoot(),
    NgDatepickerModule,
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    GaleryComponent,
    ImageComponent,
    FilterPipe,
    RoomComponent,
    ReservationComponent,
    MenuComponent,
    ContactComponent,
    GuideComponent,
    BlogComponent
  ],
  providers: [
    FilterPipe,
    ImageService,
    RoomService
  ],
  entryComponents: [
    ImageComponent
  ],
})
export class PublicModule { }
