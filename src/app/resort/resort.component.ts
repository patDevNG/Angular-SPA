import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import {Post} from '../model/post';


@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent implements OnInit {
  posts: Post[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getPost();
    
  }
  getPost(){
    this._dataService.getPosts().subscribe(res =>{
      console.log(res);
      this.posts = res[0];
      
      
    });
  
  
  

}
}
