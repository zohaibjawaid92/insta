import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  
   baseUrl = 'https://randomuser.me/api/?page=1&results=2&seed=feed';

  constructor(public http : HttpClient) { }

  public getLatestFeeds(){
    return this.http.get(this.baseUrl);
  }  

  public getFeedsPictures(){
    return this.http.get('https://picsum.photos/v2/list');
  }

}
