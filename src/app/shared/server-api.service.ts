import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServerApiService {
    constructor(private httpClient: HttpClient) {}

    getTopStories() {
        return this.httpClient.get(environment.apiUrl+'/topstories.json?print=pretty');
    }

    getAskStories() {
        return this.httpClient.get(environment.apiUrl+'/askstories.json?print=pretty');
    }

    getShowStories() {
        return this.httpClient.get(environment.apiUrl+'/showstories.json?print=pretty');
    }

    getJobStories() {
        return this.httpClient.get(environment.apiUrl+'/jobstories.json?print=pretty');
    }

    getEachStory(storyId: number) {
        return this.httpClient.get(environment.apiUrl+'/item/'+storyId+'.json?print=pretty');
    }

    userProfile(user: string) {
        return this.httpClient.get(environment.apiUrl+'/user/'+user+'.json?print=pretty');
    }

}
