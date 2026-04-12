import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="cta-section">
      <div class="cta-bg"></div>
      <div class="cta-content">
        <div class="section-eyebrow" style="text-align: center">Get In Touch</div>
        <h2 class="section-title">
          Ready to Make <em>Smarter</em> Market Decisions?
        </h2>
        <p class="section-sub">
          Contact our team of experts today and find the subscription plan that's right for you.
        </p>
        <div class="cta-actions">
          <a href="/contact" class="btn-primary">Contact Us Today →</a>
          <a href="/pricing" class="btn-outline">View Pricing</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      text-align: center;
      padding: 100px 40px;
      background: var(--dark);
      position: relative;
      overflow: hidden;
    }

    .cta-bg {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201, 168, 76, 0.06) 0%, transparent 70%);
    }

    .cta-content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .section-title {
      max-width: 700px;
      text-align: center;

      em {
        font-style: italic;
        color: var(--gold);
      }
    }

    .section-sub {
      text-align: center;
    }

    .cta-actions {
      margin-top: 44px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: 900px) {
      .cta-section { padding: 70px 20px; }
    }
  `]
})
export class CtaComponent {}
