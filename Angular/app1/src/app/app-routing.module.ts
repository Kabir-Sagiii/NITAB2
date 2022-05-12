import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpProfileComponent } from './Components/emp-profile/emp-profile.component';
import {GithubhomeComponent} from './Components/GithubSearch/githubhome/githubhome.component'

import { HttpclientComponent } from './Components/httpclient/httpclient.component';
import { NgStyleCComponent } from './Components/ng-style-c/ng-style-c.component';
import { NgSwitchCComponent } from './Components/ng-switch-c/ng-switch-c.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';
import { NgswitchconceptComponent } from './Components/ngswitchconcept/ngswitchconcept.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ParentccComponent } from './Components/Parent-Child/Child-to-Parent/parentcc/parentcc.component';
import { ParentCComponent } from './Components/Parent-Child/Parent-to-Child/parent-c/parent-c.component';
import { ProductsComponent } from './Components/products/products.component';
// import { HomeCCComponent } from './Components/SChatApp/home-cc/home-cc.component';
import { UsersProfileComponent } from './Components/users-profile/users-profile.component';
import { UsersComponent } from './Components/users/users.component';
import {HomeCComponent} from "./Components/home-c/home-c.component"
import { CategoryComponent } from './Components/Internal_Routing/category/category.component';
import { ElectronicsComponent } from './Components/Internal_Routing/electronics/electronics.component';
import { JewellaryComponent } from './Components/Internal_Routing/jewellary/jewellary.component';
import { MensClothingComponent } from './Components/Internal_Routing/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './Components/Internal_Routing/womens-clothing/womens-clothing.component';

const routes: Routes = [
  {
    path:"", component:HomeCComponent
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
  },
  {
    path:"httpclient",component:HttpclientComponent
  },
  // {
  //   path:"chat",component:HomeCCComponent
  // },
  
    {
    path:"category",component:CategoryComponent,children:[
        {
          path:'electrnoics',component:ElectronicsComponent,
        },
        {
          path:'jewellary',component:JewellaryComponent
        },
        {
          path:'menc',component:MensClothingComponent
        },
        {
          path:'womenc',component:WomensClothingComponent
        }
    ]
  },
  {
    path:"**",component:PagenotfoundComponent
  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
