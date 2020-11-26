import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-futuregames',
  templateUrl: './futuregames.component.html',
  styleUrls: ['./futuregames.component.css']
})
export class FuturegamesComponent implements OnInit {

  id:number;
  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.GetFutureGames();
  }

}
