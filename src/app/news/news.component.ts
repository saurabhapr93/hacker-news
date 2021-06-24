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
  timeinterval: any;
  isFiltered: boolean = false;
  selectedOption: string = 'top';

  constructor(private serverData: ServerDataService) { }

  ngOnInit() {
    this.getTopStories();
    clearInterval(this.timeinterval);
    this.timeinterval = setInterval(()=>{
      this.getTopStories();
    }, 60000);
  }

  changeSearchCategory(e = null) {
    if (e) {
      this.selectedOption = e.target.value;
    }
    switch (this.selectedOption) {
      case 'ask':
        this.getAskStories();
        clearInterval(this.timeinterval);
        this.timeinterval = setInterval(()=>{
          this.getAskStories();
        }, 60000);
        break;
      case 'show':
        this.getShowStories();
        clearInterval(this.timeinterval);
        this.timeinterval = setInterval(()=>{
          this.getShowStories();
        }, 60000);
        break;
      case 'jobs':
        this.getJobStories();
        clearInterval(this.timeinterval);
        this.timeinterval = setInterval(()=>{
          this.getJobStories();
        }, 60000);
        break;
      default:
        this.getTopStories();
        clearInterval(this.timeinterval);
        this.timeinterval = setInterval(()=>{
          this.getTopStories();
        }, 60000);
        break;
    }
  }

  getAskStories() {
    this.stories = [];
    this.serverData.setAskStories();
    this.stories = this.serverData.getStories();
  }

  getShowStories() {
    this.stories = [];
    this.serverData.setShowStories();
    this.stories = this.serverData.getStories();
  }

  getJobStories() {
    this.stories = [];
    this.serverData.setJobStories();
    this.stories = this.serverData.getStories();
  }

  getTopStories() {
    this.stories = [];
    this.serverData.setTopStories();
    this.stories = this.serverData.getStories();
  }

  filterData(e){
    let filterText = e.target.value.toLowerCase();
    if(filterText.length > 2) {
      this.isFiltered = true;
      this.stories = this.stories.filter(function(element){
        if (element.title.toLowerCase().indexOf(filterText) > -1) {
          return element;
        }
      });
    } else {
      this.isFiltered = false;
      this.changeSearchCategory();
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
