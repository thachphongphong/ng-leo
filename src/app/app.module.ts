import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleryComponent } from './galery/galery.component';
import { ImageComponent } from './image/image.component';

import {ImageService} from "./shared/image.service";
import {RoomService} from "./shared/room.service";
import { FilterPipe } from './shared/filter.pipe';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { GuideComponent } from './guide/guide.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover/popover.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    PopoverModule.forRoot(),
    NgDatepickerModule
  ],
  providers: [
    FilterPipe,
    ImageService,
    RoomService
  ],
  entryComponents: [
    ImageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
