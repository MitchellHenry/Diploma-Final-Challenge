import { Component, OnInit } from '@angular/core';
import { Members } from '../Models/members';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  dob: Date;
  name:string;
  email: string;
  password: string;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    
  }
  signUp(email: string, password: string, name: string, dob: Date){
    let member: Members = new Members(null,email,name,dob,password,"pending","member");
   console.log(member)
   this.dataservice.Signup(member)
  }
}
