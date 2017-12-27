import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImage = [];

  constructor() { }

  getImages(){
    return this.visibleImage = IMAGES.slice(0)
  }

}

const IMAGES = [
  {"id":1, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_1.jpg"},
  {"id":2, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_2.jpg"},
  {"id":3, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_3.jpg"},
  {"id":4, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_4.jpg"},
  {"id":5, "category": "room", "caption": "Room of Leo", "url": "assets/img/room_5.jpg"},
]