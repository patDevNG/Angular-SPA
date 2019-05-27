import { Component, OnInit } from '@angular/core';
import {Post} from '../model/post';
import{DataService} from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  posts: Post[];
  constructor(private _dataService : DataService) { }

  ngOnInit() {
    this.getMultiplePost();
  }

  getMultiplePost(){
    this._dataService.getMorePost().subscribe(res =>{
      this.posts = res;
      console.log(res);
      
    })
  }

}
