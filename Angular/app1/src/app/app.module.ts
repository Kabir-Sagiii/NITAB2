import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NavbarComponent } from './Components/navbar/navbar.component'

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
