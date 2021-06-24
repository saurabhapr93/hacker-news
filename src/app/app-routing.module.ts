import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
    {path: '', component: NewsComponent},
    {path: 'user/:id', component: UserProfileComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
