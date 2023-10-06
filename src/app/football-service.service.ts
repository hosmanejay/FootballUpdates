import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { GetLeague, Standings, allFixtures } from './Models/Models';

@Injectable({
  providedIn: 'root'
})
export class FootballServiceService {
  apiUrl:String = 'https://v3.football.api-sports.io/';
  apiKey:string = 'c2c5c5930008d74179eda86ffc42f2f1';
  headers =  {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'c2c5c5930008d74179eda86ffc42f2f1',
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
