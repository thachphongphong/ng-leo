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
  {"id":1, "category": "boats", "caption": "View from the boat", "url": "assets/img/boat1.jpg"},
  {"id":2, "category": "boats", "caption": "Boat for rent", "url": "assets/img/boat2.jpg"},
  {"id":3, "category": "mountain", "caption": "Mountain Snow", "url": "assets/img/mountain1.jpg"},
  {"id":4, "category": "mountain", "caption": "Mountain river", "url": "assets/img/mountain2.jpg"},
  {"id":5, "category": "house", "caption": "House", "url": "assets/img/house1.jpg"},
]