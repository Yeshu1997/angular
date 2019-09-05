import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
@Component({
  selector: 'app-search',
  template: `
  <input type="text" #searchInput class="search">
  <button (click)="goSearch(searchInput.value)">Search Videos</button>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

  <div class="container">
  <div *ngFor="let elements of content.items">
  <div class="card" style="width:80%" >
    <img class="card-img-top" src="{{elements.snippet.thumbnails.high.url}}" alt="vthumbnail" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">{{elements.snippet.title}}</h4>
      <p class="card-text">{{elements.snippet.description}}</p>
      <a href="https://www.youtube.com/watch?v={{elements.id.videoId}}" class="btn btn-primary">See video</a>
    </div>
  </div>
  </div>
  </div>
  `,
  styles: [`
    .search{
  margin-left:450px;
  margin-top:10px;
    }
  `]
})
export class SearchComponent implements OnInit {
public content=[];
  constructor(private contentservice:SearchServiceService) { }

  ngOnInit() {
  }
goSearch(value){
  let searchcontent: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=";
  var nurl=searchcontent+value+"&key=AIzaSyAj9c08_Nrm5N84MYB224FbWXoL__bS-6k";

  this.contentservice.getvideos(nurl).subscribe(data=>{
  console.log(data); this.content=data;
  console.log(this.content,"searchcontent")
}
 )
  
  
}
}
