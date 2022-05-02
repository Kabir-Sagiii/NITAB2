import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GithubhomeComponent} from './Components/GithubSearch/githubhome/githubhome.component'
import { NgSwitchCComponent } from './Components/ng-switch-c/ng-switch-c.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';
import { NgswitchconceptComponent } from './Components/ngswitchconcept/ngswitchconcept.component';
import { ProductsComponent } from './Components/products/products.component';
import { UsersProfileComponent } from './Components/users-profile/users-profile.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {
    path:"", component:GithubhomeComponent
  },
  {
    path:"userProfile",component:UsersProfileComponent
  },
  {
    path:"ngswitch",component:NgSwitchCComponent
  },
  {
    path:"products",component:ProductsComponent
  },
  {
    path:"users",component:UsersComponent
  },
  {
    path:"ngclass",component:NgclassComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
