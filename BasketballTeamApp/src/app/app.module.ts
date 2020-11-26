import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { NewGameComponent } from './new-game/new-game.component';
import { FuturegamesComponent } from './futuregames/futuregames.component';
import { PastGamesComponent } from './past-games/past-games.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { SignupComponent } from './signup/signup.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainDashComponent,
    NewGameComponent,
    FuturegamesComponent,
    PastGamesComponent,
    AllMembersComponent,
    SignupComponent,
    PendingApprovalComponent
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
