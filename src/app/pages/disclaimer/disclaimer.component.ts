import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [CommonModule, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />
    <main class="legal-page">
      <div class="legal-container fade-up">
        <div class="legal-header">
          <div class="eyebrow">Legal</div>
          <h1>Disclaimer</h1>
          <p class="last-updated">Last Updated: May 2026</p>
        </div>
        <div class="legal-content">
          <div class="highlight-box" style="padding: 20px; background: rgba(201,168,76,0.05); border-left: 4px solid var(--gold); margin-bottom: 32px; border-radius: 4px;">
            <strong style="color: var(--white);">Standard SEBI Disclaimer:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </div>

          <h3>1. No Guarantee of Returns</h3>
          <p>Registration granted by SEBI, membership of BASL, and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors. Past performance of our recommendations does not guarantee future results.</p>

          <h3>2. Educational & Research Purposes</h3>
          <p>The information and views provided on this website are for educational and research purposes only and should not be construed as financial or investment advice. Investors should consult their personal financial advisor before making any investment decisions.</p>

          <h3>3. Liability</h3>
          <p>UncoverMarketEdge Research, its directors, and employees shall not be liable for any direct, indirect, or consequential losses arising from the use of our research reports or recommendations.</p>
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
export class DisclaimerComponent {}
