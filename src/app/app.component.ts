import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeadComponent } from "./shared/nav-head/nav-head.component";
import { FooterComponent } from './shared/footer/footer.component';
import { AccueilComponent } from "./pages/accueil/accueil.component";

@Component({
    selector: 'pp-root',
    standalone: true,
    template: `
  <pp-nav-head></pp-nav-head>
  <router-outlet></router-outlet>
  <pp-footer></pp-footer>`,
    imports: [RouterOutlet, NavHeadComponent, FooterComponent,AccueilComponent]
})
export class AppComponent {}
