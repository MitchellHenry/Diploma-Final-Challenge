import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Members } from '../Models/members';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {

  constructor(public dataservice: DataService,public router: Router) { }

  ngOnInit(): void {
  }
  
  ToNewGame(member: Members){
  if(member.role == "manager"){
     this.router.navigate(["/new-game"])
  }
  }
}
