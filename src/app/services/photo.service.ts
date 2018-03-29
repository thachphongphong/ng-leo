import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LeoRes } from '../admin/models/leo-res';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

const API_URL = environment.apiUrl;

@Injectable()
export class PhotoService {
  visibleImage = [];

  constructor(private http: HttpClient) {
  }

  upload(formData: FormData) {
    return this.http.post<any>(API_URL + '/api/photo/upload', formData).catch(this.handleError);;
  }

  getImages() {
    return this.http.get<LeoRes>(API_URL + '/api/photos').catch(this.handleError);;
  }

  delImage(photo) {
    return this.http.delete<LeoRes>(API_URL + '/api/photo/' + photo.id).catch(this.handleError);;
  }

  getStaticImages() {
    return this.visibleImage = IMAGES.slice(0)
  }

  editPhoto(photo){
    return this.http.put<LeoRes>(API_URL + '/api/photo/edit', photo).catch(this.handleError);;
  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }
  
}

const IMAGES = [
  { "id": 1, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_1.jpg" },
  { "id": 2, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_2.jpg" },
  { "id": 3, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_3.jpg" },
  { "id": 4, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_4.jpg" },
  { "id": 5, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_5.jpg" },
]