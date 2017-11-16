import { Component, OnInit } from '@angular/core';
import {ImageService} from "../shared/image.service";

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  images:any[] = [];
  filterBy?:string = 'all';

  constructor(private _imageService:ImageService ) {
    this.images = this._imageService.getImages()
  }

  ngOnInit() {
  }

}
