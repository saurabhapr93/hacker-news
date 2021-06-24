import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerDataService } from '../shared/server-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  stories = [];
  subscription: Subscription;

  constructor(private serverData: ServerDataService) { }

  ngOnInit() {
    this.stories = [];
    this.serverData.setTopStories();
    this.stories = this.serverData.getStories();
  }

  changeSearchCategory(e) {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case 'ask':
        this.stories = [];
        this.serverData.setAskStories();
        this.stories = this.serverData.getStories();
        break;
      case 'show':
        this.stories = [];
        this.serverData.setShowStories();
        this.stories = this.serverData.getStories();
        break;
      case 'jobs':
        this.stories = [];
        this.serverData.setJobStories();
        this.stories = this.serverData.getStories();
        break;
      default:
        this.stories = [];
        this.serverData.setTopStories();
        this.stories = this.serverData.getStories();
        break;
    }
  }

  filterData(e){
    let filterText = e.target.value.toLowerCase();
    if(filterText.length > 2) {
      this.stories = this.stories.filter(function(element){
        if (element.title.toLowerCase().indexOf(filterText) > -1) {
          return element;
        }
      });
    } else {
      this.stories = [];
      this.serverData.setTopStories();
      this.stories = this.serverData.getStories();
    }
  }

  timeSince(date: number) {
    let seconds = Math.floor(((new Date().getTime()/1000) - date));
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) return interval + " years ago";

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months ago";

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + " days ago";

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + " hours ago";

    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes ago";

    return Math.floor(seconds) + " seconds ago";
  }

}
