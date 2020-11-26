import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.css']
})
export class AllMembersComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getAuthorizedMembers()
    this.dataservice.getTotalSpent()  }

}
