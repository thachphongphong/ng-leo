import { NgModule } from '@angular/core';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from '../services/user.service';
import { JwtInterceptor } from '../_helpers/jwt.interceptor';
import { fakeBackendProvider } from '../_helpers/fake-backend';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './_directives/alert.directive';
import { PhotoComponent } from './photo/photo.component';
import { PhotoService } from '../services/photo.service';
import { ShareModule } from '../share/share.module';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    DashboardComponent,
    PhotoComponent,
    RoomComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule
  ],
  providers: [
    AuthGuard,
    PhotoService,
    UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
  ]
})

export class AdminModule { }
