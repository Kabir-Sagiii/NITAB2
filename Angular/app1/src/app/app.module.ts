import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import {CustomComponent} from './Components/custom/custom.component';
import { BootstrapCComponent } from './Components/bootstrap-c/bootstrap-c.component';
import { GridsystemComponent } from './Components/gridsystem/gridsystem.component';
import { AmazongridComponent } from './Components/amazongrid/amazongrid.component';
import { CardsComponent } from './Components/cards/cards.component';
import { GithubhomeComponent } from './Components/GithubSearch/githubhome/githubhome.component';
import { GithubsearchComponent } from './Components/GithubSearch/githubsearch/githubsearch.component';
import { GithubprofileComponent } from './Components/GithubSearch/githubprofile/githubprofile.component';
import { GithubdetailsComponent } from './Components/GithubSearch/githubdetails/githubdetails.component';
import { OnewayDBComponent } from './Components/oneway-db/oneway-db.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AComponent } from './Components/a/a.component';
import { ProductsComponent } from './Components/products/products.component';
import { AttributebindingComponent } from './Components/attributebinding/attributebinding.component';
import { TwowayDBComponent } from './Components/twoway-db/twoway-db.component';
import { NgifComponent } from './Components/ngif/ngif.component';
import { NgforComponent } from './Components/ngfor/ngfor.component';
import { UsersProfileComponent } from './Components/users-profile/users-profile.component';
import { NgIFwiththenelseComponent } from './Components/ng-ifwiththenelse/ng-ifwiththenelse.component';
import { NgswitchconceptComponent } from './Components/ngswitchconcept/ngswitchconcept.component';
import { NgswitchEXComponent } from './Components/ngswitch-ex/ngswitch-ex.component';
import { UsersComponent } from './Components/users/users.component';
import { NgSwitchCComponent } from './Components/ng-switch-c/ng-switch-c.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';
import { NgStyleCComponent } from './Components/ng-style-c/ng-style-c.component';
import { ParentCComponent } from './Components/Parent-Child/Parent-to-Child/parent-c/parent-c.component';
import { ChildcComponent } from './Components/Parent-Child/Parent-to-Child/childc/childc.component';
import { ParentccComponent } from './Components/Parent-Child/Child-to-Parent/parentcc/parentcc.component';
import { ChildccComponent } from './Components/Parent-Child/Child-to-Parent/childcc/childcc.component';
import { HttpclientComponent } from './Components/httpclient/httpclient.component';
import { ClientCComponent } from './Components/SChatApp/client-c/client-c.component';
import { ServerCComponent } from './Components/SChatApp/server-c/server-c.component';
import { HomeCCComponent } from './Components/SChatApp/home-cc/home-cc.component';
import { EmpProfileComponent } from './Components/emp-profile/emp-profile.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeCComponent } from './Components/home-c/home-c.component';
import { CategoryComponent } from './Components/Internal_Routing/category/category.component';
import { ElectronicsComponent } from './Components/Internal_Routing/electronics/electronics.component';
import { JewellaryComponent } from './Components/Internal_Routing/jewellary/jewellary.component';
import { MensClothingComponent } from './Components/Internal_Routing/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './Components/Internal_Routing/womens-clothing/womens-clothing.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CustomComponent,
    BootstrapCComponent,
    GridsystemComponent,
    AmazongridComponent,
    CardsComponent,
    GithubhomeComponent,
    GithubsearchComponent,
    GithubprofileComponent,
    GithubdetailsComponent,
    OnewayDBComponent,
    NavbarComponent,
    AComponent,
    ProductsComponent,
    AttributebindingComponent,
    TwowayDBComponent,
    NgifComponent,
    NgforComponent,
    UsersProfileComponent,
    NgIFwiththenelseComponent,
    NgswitchconceptComponent,
    NgswitchEXComponent,
    UsersComponent,
    NgSwitchCComponent,
    NgclassComponent,
    NgStyleCComponent,
    ParentCComponent,
    ChildcComponent,
    ParentccComponent,
    ChildccComponent,
    HttpclientComponent,
    ClientCComponent,
    ServerCComponent,
    HomeCCComponent,
    EmpProfileComponent,
    PagenotfoundComponent,
    HomeCComponent,
    CategoryComponent,
    ElectronicsComponent,
    JewellaryComponent,
    MensClothingComponent,
    WomensClothingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
