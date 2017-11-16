import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'photos', component: GaleryComponent },
    { path: 'rooms', component: HomeComponent },
    { path: 'reservations',component: HomeComponent },
    { path: 'menu', component: HomeComponent },
    { path: 'contact', component: HomeComponent },
    { path: 'guide', component: HomeComponent },
    { path: 'blog', component: HomeComponent }
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