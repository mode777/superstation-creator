import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ImageAsset, ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-browser',
  templateUrl: './image-browser.component.html',
  styleUrls: ['./image-browser.component.css']
})
export class ImageBrowserComponent implements OnInit {

  public filter$ = new BehaviorSubject<string>("");
  public images$: Observable<ImageAsset[]>;
  public selected: ImageAsset[] = [];

  constructor(private service: ImageService) {
    this.images$ = combineLatest(service.$list, this.filter$,(list, filter) => list.filter(x => x.name.includes(filter)));
   }

  ngOnInit(): void {
  }

  addFiles(input: HTMLInputElement){
    for (let i = 0; i < input.files.length; i++) {
      this.service.addFile(input.files[i])      
    }
    input.value = null;
  }

  select(img: ImageAsset, isSelect: boolean){
    
    this.selected = [ img ] 
    
    // MULTI SELECTION
    //const remove = !!(this.selected.includes(img) && !isSelect)
    //const add = !!(!this.selected.includes(img) && isSelect)
    // if(remove){
    //   this.selected = this.selected.filter(x => x !== img)
    // } else if(add){
    //   this.selected = [ ...this.selected, img ] 
    // }

    console.log(this.selected)
  }

}
