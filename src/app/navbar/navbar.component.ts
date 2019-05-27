import { Component, OnInit } from '@angular/core';
import {Post} from '../model/post';
import {DataService} from '../data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  posts:Post[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getPost();
  }
  getPost(){
    this._dataService.getPosts().subscribe(res=>{
      this.posts= res[0];
    });
  }

}
