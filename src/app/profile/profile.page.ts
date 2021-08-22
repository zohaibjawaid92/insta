import { Component, OnInit } from '@angular/core';
import { FeedsService} from '../services/feeds.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  picturesFeeds : any;
  constructor(private feedService : FeedsService) { }

  ngOnInit() {
    this.getPictures();
  }


  getPictures(){
    this.feedService.getFeedsPictures().subscribe(data => {
      this.picturesFeeds = data;
      // console.log('from profile',data);
    })
  }

}
