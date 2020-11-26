import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/login';
import { Members } from '../Models/members';
import { NewGame } from '../Models/new-game';
import { BasketBallGame } from '../Models/basket-ball-game';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { identifierModuleUrl } from '@angular/compiler';
import { NewMember } from '../Models/new-member';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  apiURL: string = "http://diplomafinalchallenge-env.eba-vit9s2pe.us-east-1.elasticbeanstalk.com/api/";
  loggedInMember: Members
  futureGames: BasketBallGame[];
  pastGames: BasketBallGame[];
  allMembers: Members[];
  firstNameInList: string;
  uniqueGame: BasketBallGame;
  totalSpent: number[];
  pendingApproval: Members[];

  constructor(private _http: HttpClient, private router: Router) { }

  login(login: Login) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "Members/login", login).subscribe(
       (res: any) => {
        console.log(res);
        this.loggedInMember = res;
        this.router.navigate(['/main-dash']);
        resolve();
      },
      err => {
        console.log(err);
        reject();
      })
    })
  }
  NewGame(newGame: NewGame) {
    console.log(newGame);
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "BasketballGames/NewGame", newGame).subscribe(
       res => {
        console.log(res);
        alert("New Game Created");
        this.router.navigate(['/main-dash']);
        resolve();
      },
      err => {
        console.log(err);
        reject();
      })
    })
  }
  GetFutureGames(){
    return new Promise((resolve, reject) => {
      this._http.get<BasketBallGame[]>(this.apiURL + "BasketballGames/GetFutureGames").subscribe(
        res => {
          console.log(res);
          this.futureGames= res;
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  DeleteGameByID(id: number){
    return new Promise((resolve, reject) => {
      this._http.delete<BasketBallGame>(this.apiURL + "BasketBallGames/" + id).subscribe(
        res => {
          console.log(res);
         this.GetFutureGames();
         alert("Deleted Succcessfully")
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  getAuthorizedMembers(){
    return new Promise((resolve, reject) => {
      this._http.get<Members[]>(this.apiURL + "Members/Authorized").subscribe(
        res => {
          console.log(res);
          this.allMembers = res;
          this.firstNameInList = res[0].name;
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  getPendingMembers(){
    return new Promise((resolve, reject) => {
      this._http.get<Members[]>(this.apiURL + "Members/Pending").subscribe(
        (res: any) => {
          console.log(res);
         this.pendingApproval = res
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  getPastGames(){
    return new Promise((resolve, reject) => {
      this._http.get<BasketBallGame[]>(this.apiURL + "BasketballGames/GetPastGames").subscribe(
        res => {
          console.log(res);
          this.pastGames = res;
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  UpdatePastBookings(game: BasketBallGame, shouter: string, cost: number){
    let newGame = new BasketBallGame(game.id,game.date,game.venue,cost,shouter,game.booker)
    console.log(newGame);
    return new Promise((resolve, reject) => {
      this._http.put<BasketBallGame>(this.apiURL + "BasketballGames/" + game.id, newGame).subscribe(
        res => {
          this.getPastGames();
          alert("Update Successful");
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  getGameByID(id: number,shouter: string,cost:number){
    return new Promise((resolve, reject) => {
      this._http.get<BasketBallGame>(this.apiURL + "BasketballGames/" + id).subscribe(
        res => {
          console.log(res);
          this.uniqueGame = res;
          this.UpdatePastBookings(this.uniqueGame,shouter,cost);
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  Signup(member: NewMember) {
    console.log(member);
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "Members/signup", member).subscribe(
       res => {
        console.log(res);
        alert("sign up successful and pending");
        resolve();
      },
      err => {
        console.log(err);
        alert("Sign up Failed")
        reject();
      })
    })
  }
  getTotalSpent(){
    return new Promise((resolve, reject) => {
      this._http.get<number[]>(this.apiURL + "Members/TotalSpent").subscribe(
        (res: any) => {
          console.log(res);
          this.totalSpent = res;
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  AuthorizeAccount(index: number){
    let AuthorizedMember = new Members(this.pendingApproval[index].id,this.pendingApproval[index].email,this.pendingApproval[index].name,this.pendingApproval[index].dob,this.pendingApproval[index].password,"authorized",this.pendingApproval[index].role)
    console.log(AuthorizedMember);
    return new Promise((resolve, reject) => {
      this._http.put<Members>(this.apiURL + "Members/" + this.pendingApproval[index].id, AuthorizedMember).subscribe(
        res => {
          this.getPendingMembers();
          alert("Member Authorized");
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  RejectAccount(index: number){
    let AuthorizedMember = new Members(this.pendingApproval[index].id,this.pendingApproval[index].email,this.pendingApproval[index].name,this.pendingApproval[index].dob,this.pendingApproval[index].password,"rejected",this.pendingApproval[index].role)
    console.log(AuthorizedMember);
    return new Promise((resolve, reject) => {
      this._http.put<Members>(this.apiURL + "Members/" + this.pendingApproval[index].id, AuthorizedMember).subscribe(
        res => {
          this.getPendingMembers();
          alert("Member Rejected");
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
}
