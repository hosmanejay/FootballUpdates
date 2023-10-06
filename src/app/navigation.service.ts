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

  public getHistory(): string[] {
    return this.history;
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

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2];
    }
    return '';
  }
}
