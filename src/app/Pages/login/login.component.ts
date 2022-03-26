import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public value1:number;
  public value2:number;
  public result:number;

  constructor(private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.result=null;
    this.value1=Math.floor(Math.random() * 100) + 1 ;
    this.value2=Math.floor(Math.random() * 100) + 1 ;

  }
login(value){
const result = this.value1+this.value2;
if(result === parseInt(value)){
  localStorage.setItem('isLoggedin','true');
  this.router.navigate(['/Home']);
}else{
  this.ngOnInit();
  this._snackBar.open('login failed','OK',{
    duration: 1000
  });
}
}
}


