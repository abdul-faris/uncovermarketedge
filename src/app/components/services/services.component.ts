import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../services/site-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="services-section">
      <div class="services-inner">
        <div class="services-header">
          <div class="section-eyebrow">Our Expertise</div>
          <div class="header-row">
            <h2 class="section-title">Our Expertise &amp; <em>Services</em></h2>
            <p class="header-sub">Our team delivers tailored solutions with proven success across all major asset classes.</p>
          </div>
        </div>

        <div class="services-grid">
          @for (service of services; track service.title) {
            <div class="service-card">
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <a [routerLink]="service.link" class="service-link">Learn more →</a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 100px 40px;
    }

    .services-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .services-header {
      margin-bottom: 56px;
    }

    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 20px;
    }

    .header-sub {
      color: var(--muted);
      font-size: 14px;
      max-width: 360px;
      line-height: 1.7;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .service-card {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 32px;
      transition: all 0.25s;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover {
        border-color: rgba(201, 168, 76, 0.4);
        transform: translateY(-4px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

        &::after { opacity: 1; }
      }
    }

    .service-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: rgba(201, 168, 76, 0.1);
      border: 1px solid rgba(201, 168, 76, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      margin-bottom: 20px;
    }

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 10px;
      line-height: 1.3;
    }

    p {
      font-size: 13.5px;
      color: var(--muted);
      line-height: 1.65;
    }

    .service-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--gold);
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      margin-top: 20px;
      transition: gap 0.2s;

      &:hover { gap: 10px; }
    }

    @media (max-width: 900px) {
      .services-section { padding: 70px 20px; }
      .header-row { flex-direction: column; align-items: flex-start; }
    }
  `]
})
export class ServicesComponent {
  private siteData = inject(SiteDataService);
  services = this.siteData.services;
}
