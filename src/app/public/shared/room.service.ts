import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { LeoRes } from '../../admin/models/leo-res';

const API_URL = environment.apiUrl;

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) {}

  getRooms() {
    return ROOMS.slice(0)
  }

  getRoom(name){
    return ROOMS.slice(0).filter(item => item.title == name);
  }

  editRoom(room){
    return this.http.put<LeoRes>(API_URL + '/api/rooms/edit', room).catch(this.handleError);;
  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }
}

const ROOMS = [
{ "id": 1, "title": "Double Room", "desc": "2 full beds", "furniter": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "quality": 2, "price": 30, "image": "assets/img/rooms/double.jpg" },
{ "id": 2, "title": "Single Room", "desc": "1 full bed", "furniter": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "quality": 1, "price": 15, "image": "assets/img/rooms/single.jpg" },
{ "id": 3, "title": "Dorm", "desc": "Bed in 4-Bed Mixed Dormitory Room", "furniter": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "quality": 1, "price": 10, "image": "assets/img/rooms/dorm.jpg" }
]