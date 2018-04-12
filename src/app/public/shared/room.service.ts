import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {
  constructor() { }

  getRooms() {
    return ROOMS.slice(0)
  }

  getRoom(name){
    return ROOMS.slice(0).filter(item => item.title == name);
  }

}

const ROOMS = [
{ "id": 1, "title": "Double Room", "desc": "2 full beds", "furniter": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "quality": 2, "price": 30, "image": "assets/img/rooms/double.jpg" },
{ "id": 2, "title": "Single Room", "desc": "1 full bed", "furniter": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "quality": 1, "price": 15, "image": "assets/img/rooms/single.jpg" },
{ "id": 3, "title": "Dorm", "desc": "Bed in 4-Bed Mixed Dormitory Room", "furniter": ["Air conditioning", "Free wifi", "TV (70chanels)", "Room service"], "quality": 1, "price": 10, "image": "assets/img/rooms/dorm.jpg" }
]