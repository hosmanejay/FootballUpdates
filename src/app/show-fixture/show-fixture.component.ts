import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Response } from '../Models/Models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-fixture',
  templateUrl: './show-fixture.component.html',
  styleUrls: ['./show-fixture.component.scss'],
})
export class ShowFixtureComponent {
  fixture: Response[] = [];

  constructor(private navigate: NavigationService, private router: Router) {
    let state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      let data = state['data'];
      this.fixture = data?.response?.slice(0, 10) ?? [];
    }
  }

  onGoBack() {
    this.navigate.goback();
  }
}
