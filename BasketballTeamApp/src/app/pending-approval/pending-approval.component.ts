import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.css']
})
export class PendingApprovalComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.getPendingMembers();
  }

}
