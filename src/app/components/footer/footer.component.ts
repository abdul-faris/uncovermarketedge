import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteDataService } from '../../services/site-data.service';
import { RouterLink  } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer>
      <div class="footer-grid">
        <!-- Brand column -->
        <div class="footer-brand">
          <div class="footer-logo">UncoverMarket<span>Edge</span> Research</div>
          <p class="footer-desc">
            A SEBI-registered research analyst firm providing specialised market intelligence
            and subscription advisory services across equity, commodity, and derivatives markets.
          </p>
          <div class="footer-contact">
            <div>📍 Darpan Aggarwal, F-25/57 sector 3 rohini, Delhi 110085</div>
            <div><a href="mailto:subscriber.edu@uncovermarkets.org">subscriber.edu&#64;uncovermarkets.org</a></div>
            <div><a href="tel:+917827384962">+91 7827 384 962</a></div>
          </div>
          <div class="sebi-badge">
            <strong>SEBI Reg.</strong> INH000013299 &nbsp;·&nbsp; BASL Member &nbsp;·&nbsp; NISM Certified
          </div>
        </div>

        <!-- Link columns -->
        @for (section of footerSections; track section.title) {
          <div class="footer-col">
            <h4>{{ section.title }}</h4>
            <ul>
              @for (link of section.links; track link.label) {
                <li><a [routerLink]="link.href" (click)="navigateTo(link.href)">{{ link.label }}</a></li>
              }
            </ul>
          </div>
        }
      </div>

      <div class="footer-bottom">
        <span>© 2026 UncoverMarketEdge Research Private Limited. All rights reserved.</span>
        <span class="footer-disclaimer">
          Registration granted by SEBI and certification from NISM in no way guarantee
          performance of the intermediary or provide any assurance of returns to investors.
        </span>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--dark2);
      border-top: 1px solid var(--border);
      padding: 60px 40px 30px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-logo {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 700;
      color: var(--white);
      line-height: 1.2;

      span { color: var(--gold); }
    }

    .footer-desc {
      font-size: 13px;
      color: var(--muted);
      line-height: 1.7;
      margin-top: 14px;
    }

    .footer-contact {
      margin-top: 20px;
      font-size: 13px;
      color: var(--muted);
      display: flex;
      flex-direction: column;
      gap: 6px;

      a {
        color: var(--gold);
        text-decoration: none;
        &:hover { color: var(--gold-light); }
      }
    }

    .footer-col {
      h4 {
        font-size: 13px;
        font-weight: 600;
        color: var(--white);
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 18px;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      a {
        font-size: 13px;
        color: var(--muted);
        text-decoration: none;
        transition: color 0.2s;

        &:hover { color: var(--gold); }
      }
    }

    .footer-bottom {
      max-width: 1200px;
      margin: 48px auto 0;
      padding-top: 24px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 12px;
      color: var(--muted);
    }

    .footer-disclaimer {
      max-width: 500px;
      text-align: right;
      line-height: 1.5;
    }

    @media (max-width: 900px) {
      footer { padding: 60px 20px 30px; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .footer-brand { grid-column: 1 / -1; }
      .footer-disclaimer { text-align: left; }
    }

    @media (max-width: 500px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class FooterComponent {
  private siteData = inject(SiteDataService);
  private router = inject(Router);
  footerSections = this.siteData.footerSections;

  navigateTo(link: string) {
    this.router.navigateByUrl(link).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
}
