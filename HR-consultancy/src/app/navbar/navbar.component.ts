import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive,Router,NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }
  }

  onHomePage() {
    this.router.navigate(['/']);
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
