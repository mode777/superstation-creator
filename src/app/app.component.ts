import { Component } from '@angular/core';
import { NavigationCancel } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackgroundAsset, BackgroundService } from './services/background.service';
import { Asset, CollectionService } from './services/collection.service';
import { SceneAsset, SceneService } from './services/scene.service'
import { SpriteAsset, SpriteService } from './services/sprite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sst-maker';

  public navigation = new NavigationViewModel()
  public tabs: TabViewModel[] = []; 
  public activeTab: TabViewModel = null;
  public imageBrowserTab = { name: 'Image Browser' }

  constructor(
    public scenes: SceneService,
    public backgrounds: BackgroundService,
    public sprites: SpriteService){

    this.navigation.addCollection(new AssetCollectionViewModel(
      "Scenes",
      "video-camera",
      () => new SceneAsset("New Scene"),
      scenes
    ))

    this.navigation.addCollection(new AssetCollectionViewModel(
      "Backgrounds",
      "firewall",
      () => new BackgroundAsset("New Background"),
      backgrounds
    ))

    this.navigation.addCollection(new AssetCollectionViewModel(
      "Sprites",
      "bug",
      () => new SpriteAsset("New Sprite"),
      sprites
    ))
  }

  openTab(icon: string, asset: Asset){
    setTimeout(() => {      
      let index = this.tabs.findIndex(tvm => tvm.model == asset);
      if(index == -1){
        this.tabs.push(new TabViewModel(icon, asset));
        index = this.tabs.length-1; 
      }
      this.activeTab = this.tabs[index];
    }, 15);
  }

  closeTab(asset: Asset){
    let index = this.tabs.findIndex(tvm => tvm.model == asset);
    if(index != -1){
      this.tabs.splice(index, 1);
      if(this.tabs.length > 0){
        this.activeTab = this.tabs[0];
      } else {
        this.activeTab = null;
      }
    }
  }

  isAssetActive(asset: Asset){
    return this.activeTab != null && this.activeTab.model == asset;
  }

  isScene(asset: Asset){
    return asset instanceof SceneAsset
  }

  isSprite(asset: Asset){
    return asset instanceof SpriteAsset
  }

  isBackground(asset: Asset){
    return asset instanceof BackgroundAsset
  }
}

class NavigationViewModel {
  public collections: AssetCollectionViewModel[] = [];

  addCollection(vm: AssetCollectionViewModel){
    this.collections.push(vm)
  }
}

class AssetCollectionViewModel {
  public $items: Observable<AssetViewModel[]>
  public isOpen = false;
  private added = new Set<Asset>();
  
  constructor(public name: string, public icon: string, private assetFactory: () => Asset, private service: CollectionService<Asset>){
    this.$items = service.$list.pipe(map(x => x.map(y => this.createVm(y)) ));
  }

  createVm(asset: Asset){
    const vm = new AssetViewModel(asset)
    if(this.added.has(asset)){
      this.added.delete(asset);
      vm.isRenamed = true;
    }
    return vm;
  }

  add(){
    const sc = this.assetFactory();
    this.added.add(sc);
    this.service.add(sc);
    this.isOpen = true;
    return sc;
  }
}

class AssetViewModel {
  public isRenamed;
  public isActive;

  constructor(public model: Asset){

  }
}

class TabViewModel {

  constructor(public icon, public model: { name: string }){

  }
}