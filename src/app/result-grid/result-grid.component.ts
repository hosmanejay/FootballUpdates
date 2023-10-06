import { Component, Input} from '@angular/core';
import { allFixtures, Standing, Standings, countryDetails } from '../Models/Models';
import { FootballServiceService } from '../football-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.scss']
})
export class ResultGridComponent {
  constructor(private service:FootballServiceService,
    private router: Router){

  }
  @Input() country:Standings | undefined;
  standingArr : Standing[] = [];

  headers = ["SL", "Logo", "Name", "Games", "W", "L", "D", "Goal Difference", "Points"];

  ngOnChanges(){
    this.standingArr = (this.country?.response[0].league.standings[0] ?? []) ?? [];
  }

  getFixtures(rowData:Standing){
    let id = this.country?.response[0].league;
    this.service.getallFixtures(id?.id??0,id?.season.toString()??'',rowData.team.id).subscribe((data:allFixtures)=>{
      console.log(data);
      this.router.navigate(['/fixture'],{ state: { data:data }});
    })

  }
}
