import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [CommonModule, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />
    <main class="legal-page">
      <div class="legal-container fade-up">
        <div class="legal-header">
          <div class="eyebrow">Legal</div>
          <h1>Terms & Conditions</h1>
          <p class="last-updated">Last Updated: May 2026</p>
        </div>
        <div class="legal-content">
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing and using the services provided by UncoverMarketEdge Research, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

          <h3>2. Service Description</h3>
          <p>We provide research and advisory services across equity, commodity, and derivatives markets. All our services are strictly recommendation-based. We do not offer portfolio management services (PMS) or execute trades on your behalf.</p>

          <h3>3. Risk Acknowledgement</h3>
          <p>Trading and investing in the stock market involves substantial risk. You acknowledge that you are fully aware of these risks. We do not guarantee any profits or returns on investments based on our recommendations.</p>

          <h3>4. Intellectual Property</h3>
          <p>All research reports, website content, and recommendations are the intellectual property of UncoverMarketEdge Research. Unauthorized distribution, sharing, or resale of our content is strictly prohibited and may result in immediate termination of services.</p>
        </div>
      </div>
    </main>
    <app-footer />
  `,
  styles: [`
    .legal-page { background: var(--dark); min-height: 100vh; color: var(--white); padding: 120px 20px 80px; }
    .legal-container { max-width: 800px; margin: 0 auto; background: var(--dark2); border: 1px solid var(--border); border-radius: 20px; padding: 48px; }
    .eyebrow { font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 16px; }
    .legal-header { margin-bottom: 40px; border-bottom: 1px solid var(--border); padding-bottom: 24px; }
    .legal-header h1 { font-family: 'Playfair Display', serif; font-size: 36px; margin-bottom: 12px; }
    .last-updated { font-size: 13px; color: var(--muted); }
    .legal-content { font-size: 15px; line-height: 1.8; color: var(--muted); }
    .legal-content h3 { color: var(--white); font-family: 'Playfair Display', serif; font-size: 22px; margin: 32px 0 16px; font-weight: 600; }
    .legal-content p { margin-bottom: 16px; }
    .fade-up { opacity: 0; animation: fadeUp 0.7s ease forwards; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class TermsConditionsComponent {}
