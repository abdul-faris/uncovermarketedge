import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />
    <main class="legal-page">
      <div class="legal-container fade-up">
        <div class="legal-header">
          <div class="eyebrow">Legal</div>
          <h1>Privacy Policy</h1>
          <p class="last-updated">Last Updated: May 2026</p>
        </div>
        <div class="legal-content">
          <h3>1. Introduction</h3>
          <p>UncoverMarketEdge Research Private Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal and financial information when you use our website and services.</p>
          
          <h3>2. Information We Collect</h3>
          <p>To comply with SEBI regulations and provide our services, we may collect personal information including but not limited to: your name, contact details, PAN, Aadhaar, Demat account details, financial status, and investment objectives.</p>
          
          <h3>3. How We Use Your Information</h3>
          <p>We use your information strictly for KYC verification, providing research and advisory services, billing, and regulatory compliance. We do not sell or rent your personal information to third parties.</p>

          <h3>4. Data Security</h3>
          <p>We implement robust security measures to protect your data from unauthorized access. However, no data transmission over the internet can be guaranteed to be 100% secure.</p>
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
export class PrivacyPolicyComponent {}
