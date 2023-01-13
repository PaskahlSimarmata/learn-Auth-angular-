import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Login, Register } from '../interface/Book';
import { signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
isAuthenticated=false
isLoading=false;
passwordMatch=true
  constructor(private router:Router) { 
    
  }


login(form:Login){
  if(this.isLoading) return;
  this.isLoading=true
  const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in 
    this.isAuthenticated=true
    this.router.navigate([''])
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated=false
  }).finally(()=>(this.isLoading=false))
}

register(form:Register){
  if(this.isLoading) return;
    this.isLoading=true
    if(form.password !== form.confirmPassword){
      this.passwordMatch=false
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
    this.isAuthenticated=true
    console.log('register success')
    
  })
  .catch((error) => {
    this.isAuthenticated=false
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }).finally(()=>(this.isLoading=false))  
}

logout(){
  const auth = getAuth();
signOut(auth).then(() => {
  this.isAuthenticated=false
  this.router.navigate(['/login'])
}).catch((error) => {
  // An error happened.
});
}
}
