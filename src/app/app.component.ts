import { Component, OnInit } from "@angular/core";
import {initializeApp} from "firebase/app"
import { AuthServiceService } from "./auth/auth-service.service";
import { firebaseConfig } from "./firebase.config";
@Component({
    selector:'app-root',
    templateUrl:"app.component.html",
    styleUrls:["app.component.scss"]
})

export class AppComponent implements OnInit{
    constructor(private authService:AuthServiceService){
    }
    isAutenticated(){
        return this.authService.isAuthenticated
    }
    logout(){
        this.authService.logout();
    }
    ngOnInit(): void {
        initializeApp(firebaseConfig)
    }
}