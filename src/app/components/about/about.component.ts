import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteDataService } from '../../services/site-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about">
      <div class="about-inner">
        <!-- Left: Text -->
        <div>
          <div class="section-eyebrow">About Us</div>
          <h2 class="section-title">About <em>UncoverMarketEdge</em> Research</h2>
          <p class="section-sub">
            A market research and analysis company specialising in gathering and interpreting
            data about markets, consumers, competitors, and industry trends — helping businesses
            and investors make informed decisions.
          </p>
          <p class="section-sub" style="margin-top: 14px">
            We play a crucial role in providing insights into market dynamics, customer
            preferences, and strategic opportunities.
          </p>

          <div class="disclaimer-box">
            UncoverMarketEdge Research provides investment research and advisory services. The
            information and recommendations are based on reliable sources and thorough analysis.
            Investments involve risk, and past performance is not indicative of future results.
            Clients are advised to consult with financial advisors before making investment
            decisions.
          </div>

          <div class="sebi-badge">
            <strong>SEBI Reg:</strong> INH000013299 &nbsp;|&nbsp; BASL Member
          </div>
        </div>

        <!-- Right: Card -->
        <div class="about-visual">
          <div class="about-card">
            <div class="about-card-label">Our Core Strengths</div>
            <div class="about-pillars">
              @for (pillar of pillars; track pillar) {
                <div class="pillar">
                  <div class="pillar-dot"></div>
                  <span>{{ pillar }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--dark2);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 100px 40px;
    }

    .about-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-card {
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 40px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }
    }

    .about-card-label {
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--gold);
      font-weight: 600;
      margin-bottom: 20px;
    }

    .about-pillars {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .pillar {
      display: flex;
      align-items: center;
      gap: 14px;
      background: rgba(201, 168, 76, 0.05);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 18px;

      span { font-size: 14px; color: var(--text); }
    }

    .pillar-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--gold);
      flex-shrink: 0;
    }

    .disclaimer-box {
      margin-top: 40px;
      background: rgba(201, 168, 76, 0.05);
      border: 1px solid var(--border);
      border-left: 3px solid var(--gold);
      border-radius: 0 10px 10px 0;
      padding: 20px 24px;
      font-size: 13px;
      color: var(--muted);
      line-height: 1.65;
    }

    @media (max-width: 900px) {
      .about { padding: 70px 20px; }
      .about-inner { grid-template-columns: 1fr; gap: 40px; }
    }
  `]
})
export class AboutComponent {
  private siteData = inject(SiteDataService);
  pillars = this.siteData.aboutPillars;
}
