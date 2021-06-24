import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { ServerApiService } from './shared/server-api.service';
import { ServerDataService } from './shared/server-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServerApiService, ServerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
