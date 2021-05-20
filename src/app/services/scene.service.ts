import { Injectable } from '@angular/core';
import { Asset, CollectionService } from './collection.service';

export class SceneAsset extends Asset {

}

@Injectable({
  providedIn: 'root'
})
export class SceneService extends CollectionService<SceneAsset>{

  constructor() { 
    super();
  }

  

}
