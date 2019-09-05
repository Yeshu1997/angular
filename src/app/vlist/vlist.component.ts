import { Component, OnInit } from '@angular/core';
import { YoutubeserviceService } from '../video.service';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vlist',
  template: `
  <iframe width="420" height="315"
[src]=urlSafe>
</iframe>
<p>{{info.title}}</p>
<h5>Description:{{info.description}}</h5>
  `,
  styles: [`
    .image { 
    padding:7px;
    margin-top:10px;
    }
    p{
      font-family: 'Amita';font-size: 22px;
    }
  `]
})
export class VlistComponent implements OnInit {
  public info;
  public videoid;
  public url="https://www.youtube.com/embed/";
  public urlSafe;

  constructor(private video:YoutubeserviceService, private router:ActivatedRoute,private sanitizer:DomSanitizer) { }

  
  ngOnInit() {
    this.videoid=this.router.snapshot.paramMap.get('elements');
    //console.log(this.info);
    console.log(this.videoid);
    this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url+this.videoid);
    console.log(this.urlSafe);
    this.info=this.video.getfromService();
    console.log(this.info);
  }
  
  

}
