import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Breweries } from 'src/app/interfaces/breweries';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  public tabledata:Breweries;

  constructor(private _httpClient:HttpClient) { }
  getAllBreweries():Observable<Breweries>{
    return this._httpClient.get<Breweries>('https://api.openbrewerydb.org/breweries');
  }
  getBreweriesByName(name):Observable<Breweries>{
    return this._httpClient.get<Breweries>('https://api.openbrewerydb.org/breweries/'+name);
  }
  searchBreweries(name):Observable<Breweries>{
    return this._httpClient.get<Breweries>('https://api.openbrewerydb.org/breweries/search?query='+name);
  }
}


