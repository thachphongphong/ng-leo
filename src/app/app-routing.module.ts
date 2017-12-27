import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { GuideComponent } from './guide/guide.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'photos', component: GaleryComponent },
    { path: 'rooms', component: RoomComponent },
    { path: 'reservations',component: ReservationComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'guide', component: GuideComponent },
    { path: 'blog', component: BlogComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: []
})
export class AppRoutingModule { }