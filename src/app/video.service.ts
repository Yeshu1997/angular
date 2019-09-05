import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVideos } from './videos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeserviceService {
  public receivedData;
private _url:string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=cricket&key=AIzaSyAj9c08_Nrm5N84MYB224FbWXoL__bS-6k";
  constructor(private http :HttpClient) { }
  getvideos(): any{
    return this.http.get(this._url);
   }

   getvideosfav():Observable<any>{
     return this.http.get('http://localhost:3000/posts');
   }
   addtofav(video):Observable<any>{
     console.log(video);
     return this.http.post('http://localhost:3000/posts/',video);
   }
   getfav(){
     return this.http.get('http://localhost:3000/posts');
   }
   removefav(video:number):Observable<any>{
     return this.http.delete(`${'http://localhost:3000/posts'}/${video}`);
   }
  //  getdetails():Observable<any>{
  //    return this.http.get('this.')
  //  }
  sendtoService(value){
     this.receivedData=value;
     console.log(this.receivedData);
  }
  getfromService()
  {
    return this.receivedData;
  }

}
