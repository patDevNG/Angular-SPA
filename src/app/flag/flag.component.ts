import { Component, OnInit } from '@angular/core';
import {Post} from '../model/post';
import {DataService} from '../data.service';
@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {
  posts:Post[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this._dataService.getPosts().subscribe(res=>{
      this.posts = res[0];
      console.log(this.posts);
      
    })
  }

}
