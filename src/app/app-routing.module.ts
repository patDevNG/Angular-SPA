import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LandingPageComponent} from './landing-page/landing-page.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {ContactusComponent} from './contactus/contactus.component';
import {MembersComponent} from './members/members.component';
import {OrganizationComponent} from './organization/organization.component';
import {EventComponent} from './event/event.component';

  import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'members',component:MembersComponent},
  {path:'blog',component:BlogComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'organization',component:OrganizationComponent},
  {path:'event',component:EventComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
