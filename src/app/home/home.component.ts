
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { Breweries } from 'src/app/interfaces/breweries';
import { DatastoreService } from 'src/app/Services/datastore.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataSource:Breweries;
  public allBreweries:Breweries;
 
  
  public searchval:string;
  public tabletype:boolean;
  constructor(private ds:DatastoreService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ds.getAllBreweries().subscribe(res=>{
     this.dataSource=res;
     this.allBreweries=res;
    })
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  this.searchval='';
   if(tabChangeEvent.index === 0){
    this.dataSource=this.allBreweries;
   }else {
    this.dataSource=null;
   }
  }
 
  getdatabysearch(value){
    this.ds.searchBreweries(value).subscribe(res=>{
      console.log( Object.keys(res).length);
      if( Object.keys(res).length === 0){
        this._snackBar.open('No matches found','OK',{
          duration: 1000
        }); 
        this.dataSource=null;
      }else{
        this.dataSource=res;
      }
      
    })

  }
  logout(){
    this.router.navigate(['/Login']);
    localStorage.clear();
  }
 


}
