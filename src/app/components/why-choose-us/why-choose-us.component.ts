import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteDataService } from '../../services/site-data.service';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="why">
      <div class="why-inner">
        <!-- Left: content -->
        <div>
          <div class="section-eyebrow">Why Choose Us</div>
          <h2 class="section-title">Strengths &amp; Value <em>Proposition</em></h2>
          <p class="section-sub">
            We combine deep market expertise with cutting-edge technology to deliver
            insights that drive real results for our clients.
          </p>

          <div class="why-list">
            @for (item of whyItems; track item.number) {
              <div class="why-item">
                <div class="why-num">{{ item.number }}</div>
                <div class="why-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Right: stats grid -->
        <div class="why-visual">
          @for (stat of whyStats; track stat.label; let i = $index) {
            <div class="why-stat-card" [class.accent]="i === 0 || i === 3">
              <div class="big">{{ stat.value }}</div>
              <div class="lbl">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why {
      background: var(--dark2);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 100px 40px;
    }

    .why-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .why-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 40px;
    }

    .why-item {
      display: flex;
      gap: 16px;
      padding: 20px 24px;
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 12px;
      transition: border-color 0.2s;

      &:hover { border-color: rgba(201, 168, 76, 0.35); }
    }

    .why-num {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      color: rgba(201, 168, 76, 0.25);
      font-weight: 700;
      line-height: 1;
      flex-shrink: 0;
    }

    .why-content {
      h4 {
        font-size: 15px;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 4px;
      }
      p {
        font-size: 13px;
        color: var(--muted);
        line-height: 1.6;
      }
    }

    .why-visual {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .why-stat-card {
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px 24px;
      text-align: center;

      &.accent {
        background: rgba(201, 168, 76, 0.08);
        border-color: rgba(201, 168, 76, 0.3);
      }
    }

    .big {
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      font-weight: 700;
      color: var(--gold);
    }

    .lbl {
      font-size: 12px;
      color: var(--muted);
      margin-top: 6px;
      letter-spacing: 0.05em;
    }

    @media (max-width: 900px) {
      .why { padding: 70px 20px; }
      .why-inner { grid-template-columns: 1fr; gap: 40px; }
      .why-visual { grid-template-columns: 1fr 1fr; }
    }
  `]
})
export class WhyChooseUsComponent {
  private siteData = inject(SiteDataService);
  whyItems = this.siteData.whyItems;
  whyStats = this.siteData.whyStats;
}
