import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ServerApiService } from '../shared/server-api.service';
import { ServerDataService } from '../shared/server-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any ;
  isUserAvailable = false;

  constructor(private serverApi: ServerApiService, private route: ActivatedRoute, private serverData: ServerDataService) { }

  ngOnInit() {
    this.isUserAvailable = false;
    this.serverApi.userProfile(this.route.snapshot.params.id).subscribe((response: Data) => {
      this.user = response;
      this.isUserAvailable = true;
    });

  }

}
