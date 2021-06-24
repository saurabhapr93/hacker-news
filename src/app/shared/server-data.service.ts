import { Injectable } from "@angular/core";
import { ServerApiService } from "./server-api.service";

@Injectable()
export class ServerDataService {
    private stories = [];
    constructor(private serverApi: ServerApiService){}

    getStories() {
        return this.stories;
    }

    setTopStories() {
        this.stories = [];
        this.serverApi.getTopStories().subscribe((response: Response) => {
            for (let i = 0; i < 30; i++) {
                this.serverApi.getEachStory(response[i]).subscribe((response: Response) => {
                this.stories.push(response);
            });
        }
      });
    }

    setAskStories() {
        this.stories = [];
        this.serverApi.getAskStories().subscribe((response: Response) => {
            for (let i = 0; i < 30; i++) {
                this.serverApi.getEachStory(response[i]).subscribe((response: Response) => {
                this.stories.push(response);
            });
        }
      });
    }

    setShowStories() {
        this.stories = [];
        this.serverApi.getShowStories().subscribe((response: Response) => {
            for (let i = 0; i < 30; i++) {
                this.serverApi.getEachStory(response[i]).subscribe((response: Response) => {
                this.stories.push(response);
            });
        }
      });
    }

    setJobStories() {
        this.stories = [];
        this.serverApi.getJobStories().subscribe((response: Response) => {
            for (let i = 0; i < 30; i++) {
                this.serverApi.getEachStory(response[i]).subscribe((response: Response) => {
                this.stories.push(response);
            });
        }
      });
    }

}