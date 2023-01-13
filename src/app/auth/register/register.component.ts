import { Component, OnInit } from '@angular/core';
import {  Register } from 'src/app/interface/Book';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  forms: Register={
    email:'',
    password:'',
    confirmPassword:''
  }

  constructor(private authService:AuthServiceService) { }

 
  submit(){
    this.authService.register(this.forms)
  }
  isLoading(){
    return this.authService.isLoading
  }
  ngOnInit(): void {

  }

}
