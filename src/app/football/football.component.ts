import { Component, OnInit } from '@angular/core';
import { FootballServiceService } from '../football-service.service';
import { Standings, countryDetails } from '../Models/Models';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss'],
})

export class FootballComponent implements OnInit {

  currentCountry?: countryDetails;

  constructor(private service:FootballServiceService,private navigate:NavigationService, private router: Router){
    this.navigate.startSaveHistory();
  }
  ngOnInit(): void {
    let selectd = window.sessionStorage.getItem('selected');
    let league = window.sessionStorage.getItem('league');
    let standing = window.sessionStorage.getItem('standing');
    if(selectd){
      if(standing){
        this.selectedCountry = JSON.parse(standing);
      }else{
        this.onSelectCountry(JSON.parse(selectd));
      }
    }else{
      this.onSelectCountry({
        name : "England",
        leagueName : "Premier League"
       })
    }
    
  }
  leagueCountries: countryDetails[] = [
   {
    name : "England",
    leagueName : "Premier League"
   },
   {
    name : "Spain",
    leagueName : "La Liga"
   },
   {
    name : "France",
    leagueName : "Ligue 1"
   },
   {
    name : "Germany",
    leagueName : "Bundesliga"
   },
   {
    name : "Italy",
    leagueName : "Serie A"
   }  
  ];


  selectedCountry: Standings | undefined ;
  

  onSelectCountry(selectedCountry: countryDetails): void {
    this.currentCountry = selectedCountry;
    window.sessionStorage.setItem('selected', JSON.stringify(selectedCountry));
      this.service.getCurrentLeagueId(selectedCountry.leagueName,selectedCountry.name,true).subscribe((data)=> {
        window.sessionStorage.setItem('league', JSON.stringify(data));
        if(data){
          this.service.getCurrentStandings(data?.response[0].seasons[0].year.toString(),data.response[0].league.id).subscribe((standingData : Standings)=>{
            this.selectedCountry = standingData;
            window.sessionStorage.setItem('standing', JSON.stringify(standingData));
          })
        }
      })
  }
}
