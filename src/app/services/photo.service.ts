import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LeoRes } from '../admin/models/leo-res';

const API_URL = environment.apiUrl;

@Injectable()
export class PhotoService {
  visibleImage = [];

  constructor(private http: HttpClient) {
  }

  upload(formData: FormData) {
    return this.http.post<any>(API_URL + '/api/photo/upload', formData);
  }

  getImages() {
    return this.http.get<LeoRes>(API_URL + '/api/photos');
  }

  delImage(photo) {
    return this.http.delete<LeoRes>(API_URL + '/api/photo/' + photo.id);
  }

  getStaticImages() {
    return this.visibleImage = IMAGES.slice(0)
  }
}

const IMAGES = [
  { "id": 1, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_1.jpg" },
  { "id": 2, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_2.jpg" },
  { "id": 3, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_3.jpg" },
  { "id": 4, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_4.jpg" },
  { "id": 5, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_5.jpg" },
]