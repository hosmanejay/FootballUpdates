import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { GetLeague, Standings, allFixtures } from './Models/Models';

@Injectable({
  providedIn: 'root'
})
export class FootballServiceService {
  apiUrl:string = 'https://v3.football.api-sports.io/';
  headers =  {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'e32578c8860916c44ca8c5c16071da7e',
  }
  constructor(private http : HttpClient) { }

  getCurrentStandings(season:string,id:number): Observable<Standings>{
    return this.http.get<Standings>(`${this.apiUrl}standings?league=${id}&season=${season}`,{headers:this.headers});          
}

getCurrentLeagueId(name:string,country:string,current:boolean): Observable<GetLeague>{
  return this.http.get<GetLeague>(`${this.apiUrl}leagues?name=${name}&country=${country}&current=${current}`,{headers:this.headers});      
}

getallFixtures(league:number,season:string,teamId:number): Observable<allFixtures>{
  return this.http.get<allFixtures>(`${this.apiUrl}fixtures?league=${league}&season=${season}&team=${teamId}`,{headers:this.headers});           
}
}
