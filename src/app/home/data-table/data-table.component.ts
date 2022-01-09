import { Component, Input, OnInit } from '@angular/core';
import { Breweries } from 'src/app/interfaces/breweries';
import { DatastoreService } from 'src/app/Services/datastore.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public resconversion: Array<Breweries> = [];
  public brewname: string;
  public showspinner: boolean;
  constructor(private ds: DatastoreService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    console.log('test');;
    this.resconversion = [];
  }
  getdatabyname(value) {
    this.resconversion = [];
    this.showspinner = true;
    this.ds.getBreweriesByName(value).subscribe(res => {
      this.resconversion.push(res);
      this.showspinner = false;
    }, (err) => {
      console.log(err);
      this._snackBar.open(err.error.message, 'OK', {
        duration: 1000
      });
      this.showspinner = false;
      this.resconversion = [];
    })

  }
  checkdata() {
    return this.resconversion.length > 0 ? true : false;
  }

}