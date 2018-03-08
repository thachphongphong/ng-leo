import {ModuleWithProviders, NgModule} from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/bs-dropdown.module';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover/popover.module';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from './image/image.component';
import { FilterPipe } from './shared/filter.pipe';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { GuideComponent } from './guide/guide.component';
import { BlogComponent } from './blog/blog.component';
import { RoomService } from './shared/room.service';
import { PublicRoutingModule } from './public-routing.module';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    PopoverModule.forRoot(),
    NgDatepickerModule,
    ShareModule,
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
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
    RoomService
  ],
  exports: []
})
export class PublicModule { }
