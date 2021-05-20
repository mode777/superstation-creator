import { Injectable } from '@angular/core';
import { Asset, CollectionService } from './collection.service';
import { ImageFrame } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService extends CollectionService<BackgroundAsset>{
  
  constructor() { 
    super();
  }
    
}

export class BackgroundAsset extends Asset {

  public tileset: Tileset

  constructor(name: string, public width = 0, public height = 0){
    super(name);
  }

}

export class Tileset {

  constructor(public image: ImageFrame, public tileWidth: number, public tileHeight: number){

  }
}