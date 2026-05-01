import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-grievance',
  standalone: true,
  imports: [CommonModule, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />
    <main class="legal-page">
      <div class="legal-container fade-up">
        <div class="legal-header">
          <div class="eyebrow">Legal</div>
          <h1>Grievance Redressal</h1>
          <p class="last-updated">Last Updated: May 2026</p>
        </div>
        <div class="legal-content">
          <p>We strive to provide excellent service, but if you have any complaints or grievances, please follow our escalation matrix:</p>

          <h3>Level 1: Customer Support</h3>
          <p>For immediate resolution of your queries or complaints, please reach out to our support team.<br>
          <strong style="color: var(--white);">Email:</strong> subscriber.edu&#64;uncovermarkets.org<br>
          <strong style="color: var(--white);">Phone:</strong> +91 7619625303</p>

          <h3>Level 2: Compliance Officer</h3>
          <p>If your issue is not resolved within 7 working days, you may escalate the matter to our Compliance Officer.<br>
          <strong style="color: var(--white);">Email:</strong> compliance&#64;uncovermarkets.org</p>

          <h3>Level 3: SEBI SCORES Portal</h3>
          <p>If you are not satisfied with our resolution, you may lodge a complaint with SEBI through the SCORES (SEBI Complaints Redress System) portal.<br>
          <strong style="color: var(--white);">Website:</strong> <a href="https://scores.gov.in" target="_blank" style="color: var(--gold); text-decoration: none;">https://scores.gov.in</a></p>
          
          <p style="margin-top: 32px; font-size: 13px; color: var(--gold);"><em>Note: Filing complaints on SCORES is easy and quick. Please ensure you have approached the company first before filing a grievance on the SCORES portal.</em></p>
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
export class GrievanceComponent {}
