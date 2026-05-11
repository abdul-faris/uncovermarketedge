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
          <ul>
          <li>Investment in securities market are subject to market risks. Read all the related documents carefully before investing.</li>
          <li>Market Risks refer to partial or permanent loss on your investments in certain market conditions.</li>
          <li>Registration granted by SEBI and certification from NISM in no way guarantees the performance of the intermediary or provides any assurance of returns to investors.</li>
          <li>The securities quoted are for illustration only and are not recommendatory.</li>
          <li>Investing in financial markets involves risks. Past performance is not indicative of future results. You should carefully consider your risk tolerance and financial situation before making any investment.</li>
          <li>We operate in accordance with SEBI Research Analyst, 2014 regulations and guidelines. Any information provided here is intended to be accurate and in compliance with SEBI requirements. However, we do not warrant or represent that the information provided on this website/platform is always up-to-date, accurate, or complete.</li>
          <li>Details provided in any social media platforms are for educational purposes and should not be construed as investment advice. We reserve the right to modify or update this disclaimer at any time without notice.</li>
          </ul>
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
export class DisclaimerComponent { }
