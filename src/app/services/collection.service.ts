import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class Asset {
  constructor(public name: string){

  }
}

export class CollectionService<T extends Asset> {

  private data: T[] = []
  public $list: Observable<T[]> = new BehaviorSubject<T[]>(this.data); 

  constructor() { }

  add(item: T){
    this.data.push(item);
    (<BehaviorSubject<T[]>>this.$list).next(this.data);
  }
}
