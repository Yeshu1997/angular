import { Component, OnInit } from '@angular/core';
import { YoutubeserviceService } from '../video.service';
import{HttpClient} from '@angular/common/http';
import{Router}from '@angular/router';
@Component({
  selector: 'app-home',
  template: `
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <div class="container">
  
  <div *ngFor="let elements of info">
  <div class="card" style="width:80%" >
    <img class="card-img-top" src="{{elements.snippet.thumbnails.high.url}}" alt="vthumbnail" style="width:100%">
    
    <div class="card-body">
      <h4 class="card-title">{{elements.snippet.title}}</h4>
      <p class="card-text">{{elements.snippet.description}}</p>
      <a href="https://www.youtube.com/watch?v={{elements.id.videoId}}" class="btn btn-primary">See video</a>
      <button (click)="detail(elements.id.videoId,elements.snippet)">details</button>
      <button (click)="addfav(elements,inputcomment.value)">Add to favourites</button>
      <textarea rows="2" cols="50" #inputcomment></textarea>
    </div>
  </div>
  </div>
  </div><h5>{{info.snippet.title}}</h5>
  <p>{{info.snippet.description}}</p>
  `,
  styles: [`
    .container {
 margin-top:20px;
    }
  `]
})
export class HomeComponent implements OnInit {
 public  info=[];
  constructor(private video:YoutubeserviceService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
this.video.getvideos().subscribe(data=>this.info =data.items);
  }
    addfav(elements,cmt){
  // console.log(elements);
      elements.id=elements.id.videoId;
      elements.comment=cmt;
  this.video.addtofav(elements).subscribe();
}
 detail(elements,data){
  this.router.navigateByUrl(`vlist/${elements}`);
  this.video.sendtoService(data);
 }
    showfav(){
 this.router.navigate(['favourite']);
 }
}
