import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {

  visibleImage = [];

  constructor() { }

  getRooms(){
    return this.visibleImage = ROOMS.slice(0)
  }

}

const ROOMS = [
  {"id":1, "tit": "Double Room","text": "2 full beds", "descs": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "qua" : 2, "price": 30, "url": "assets/img/rooms/double.jpg"},
  {"id":2, "tit": "Single Room","text": "1 full bed","descs": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "qua" : 1, "price": 15, "url": "assets/img/rooms/single.jpg"},
  {"id":3, "tit": "Dorm","text": "Bed in 4-Bed Mixed Dormitory Room", "descs": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "qua" : 1, "price": 10, "url":"assets/img/rooms/dorm.jpg"}
]