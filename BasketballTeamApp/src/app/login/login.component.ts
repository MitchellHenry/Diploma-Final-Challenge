import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
  }
  logIn(email: string, password: string) {
    let login = new Login(email,password)
    console.log(login);
    this.dataservice.login(login);
}

}
