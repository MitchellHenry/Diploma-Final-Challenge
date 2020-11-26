import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMembersComponent } from './all-members/all-members.component';
import { FuturegamesComponent } from './futuregames/futuregames.component';
import { LoginComponent } from './login/login.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { NewGameComponent } from './new-game/new-game.component';
import { PastGamesComponent } from './past-games/past-games.component';
import { PendingApprovalComponent } from './pending-approval/pending-approval.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{ path: 'login', component: LoginComponent},
{ path: 'main-dash', component: MainDashComponent},
{ path: 'new-game', component: NewGameComponent},
{ path: 'future-games', component: FuturegamesComponent},
{ path: 'past-games', component: PastGamesComponent},
{ path: 'all-members', component: AllMembersComponent},
{ path: 'signup', component: SignupComponent},
{ path: 'pending-approval',  component: PendingApprovalComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
