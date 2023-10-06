import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  public goback(): void {
    this.history.pop();

    if (this.history.length > 0) {
      console.log('navigating back');
      this.location.back();
    } else {
      console.log('navigating to /');
      this.router.navigate(['/home'], { relativeTo: this.route });
    }
  }
}
