import { Injectable } from '@angular/core';
import { Asset, CollectionService } from './collection.service';

export class SpriteAsset extends Asset {

}

@Injectable({
  providedIn: 'root'
})
export class SpriteService extends CollectionService<SpriteAsset>{

  constructor() { 
    super();
  }

  

}
