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
          <p>"Uncover Market Edge" respects and values the Right to Privacy of each and every individual. We are committed to maintaining the confidentiality of all information, whether public or private, provided to us by our clients. This Privacy Policy of "Uncover Market Edge" applies to both current and former clients.</p>
          <p>Your information, whether public or private, will NOT be sold, rented, exchanged, transferred, or given to any company or individual for any reason without your consent. It will be used SOLELY for providing the services to you for which you have subscribed to us and not for any other purposes. Your information represents your identity with us. If any changes are made to the information you provided, please notify us by calling or emailing us.</p>
          <p>In addition to the services provided, your information (mobile number, email ID, etc.) may be used to send you newsletters, surveys, contest information, or updates about new services for your benefit. By subscribing to our services, you agree that "Uncover Market Edge" has the right to do so.</p>
          <p>When filling out the ‘Quick Form’ and the ‘Free Trial Form’ on our website, you agree to provide your valid mobile number. By providing your mobile number, you consent to receive calls and SMS from us, even if your number is registered on the National ‘Do Not Disturb’ registry.</p>
          <p>By subscribing to our services, you consent to our Privacy Policy and Terms of Use.</p>
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
