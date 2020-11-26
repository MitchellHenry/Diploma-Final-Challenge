import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit {

  id: number;
  shouter: string;
  cost: number;
  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getPastGames();
    this.dataservice.getAuthorizedMembers();
  }
  updateGame(cost:number,ID:number,shouter:string){
    if(shouter == undefined || shouter == null || shouter == ""){
      shouter = this.dataservice.firstNameInList
    }
    this.dataservice.getGameByID(ID,shouter,cost);
  }
}
