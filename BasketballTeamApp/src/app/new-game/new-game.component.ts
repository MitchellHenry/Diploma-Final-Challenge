import { Component, OnInit } from '@angular/core';
import { NewGame } from '../Models/new-game';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  date: Date;
  venue: string;
  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
  }
  NewGame(date:Date,venue:string){
    let newGame= new NewGame(date,venue,this.dataservice.loggedInMember.name)
    console.log(newGame);
    this.dataservice.NewGame(newGame);
  }
}
