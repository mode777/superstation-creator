import { Injectable } from '@angular/core';
import { Asset, CollectionService } from './collection.service';


@Injectable({
  providedIn: 'root'
})
export class ImageService extends CollectionService<ImageAsset>{
  
  constructor() { 
    super();
  }

  addFile(file: File){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imgAsset = new ImageAsset(file.name, <string>reader.result);
      super.add(imgAsset);
    }, false);

    reader.readAsDataURL(file);
  }
}

export class ImageAsset extends Asset {
  constructor(name: string, public url: string){
    super(name);
  }
}

export class ImageFrame {
  constructor(public image: ImageAsset, public rect: Rect){

  }
}

export interface Rect {
  x :number,
  y: number,
  w: number,
  h: number
}