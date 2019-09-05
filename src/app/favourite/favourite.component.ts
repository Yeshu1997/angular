import { Component, OnInit } from '@angular/core';
import{ YoutubeserviceService } from '../video.service';
import{HttpClient}from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public content=[];
  constructor(private http: HttpClient,private contentservice:YoutubeserviceService ) { }
  v;
  ngOnInit() {
    this.contentservice.getvideosfav().subscribe(data=>{this.content =data;
      console.log(this.content);});
    
  }
  removefav(value){
    this.contentservice.removefav(value).subscribe();
  }
}
