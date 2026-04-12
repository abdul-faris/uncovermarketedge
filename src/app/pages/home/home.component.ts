import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TopbarComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-topbar />
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-services />
      <app-why-choose-us />
      <app-cta />
    </main>
    <app-footer />
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
    }

    app-topbar {
      order: -2;
      flex-shrink: 0;
    }

    app-navbar {
      order: -1;
      flex-shrink: 0;
    }

    app-footer {
      order: 1;
      flex-shrink: 0;
      margin-top: auto;
    }
  `]
})
export class HomeComponent {}
