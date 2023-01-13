import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interface/Book';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  forms : Login={
    email:'',
    password:''
  } 
  

  submit(){
    this.authService.login(this.forms)
  }
  isLoading(){
    return this.authService.isLoading
  }
  
  

  ngOnInit(): void {
  }

}
