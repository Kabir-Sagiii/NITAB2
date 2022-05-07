import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GithubhomeComponent} from './Components/GithubSearch/githubhome/githubhome.component'
import { NgStyleCComponent } from './Components/ng-style-c/ng-style-c.component';
import { NgSwitchCComponent } from './Components/ng-switch-c/ng-switch-c.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';
import { NgswitchconceptComponent } from './Components/ngswitchconcept/ngswitchconcept.component';
import { ParentccComponent } from './Components/Parent-Child/Child-to-Parent/parentcc/parentcc.component';
import { ParentCComponent } from './Components/Parent-Child/Parent-to-Child/parent-c/parent-c.component';
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
  },
  {
    path:'ngstyle',component:NgStyleCComponent
  },
  {
    path:'inputd',component:ParentCComponent
  },
  {
    path:'outputd',component:ParentccComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
