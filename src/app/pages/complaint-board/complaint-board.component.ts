import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-complaint-board',
  standalone: true,
  imports: [CommonModule, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />
    <main class="legal-page">
      <div class="legal-container fade-up">
        <div class="legal-header">
          <div class="eyebrow">Support</div>
          <h1>Complaint Board</h1>
          <p class="last-updated">We value your feedback and strive to resolve all issues promptly.</p>
        </div>
        <div class="legal-content">
          <p>If you have faced any issues with our services, please let us know. We have a dedicated team to look into your complaints and provide a resolution.</p>
          
          <div class="complaint-card">
            <h3>Register a New Complaint</h3>
            <p>To register a complaint, please email us directly with your client ID and the details of your issue. Our team will generate a ticket and get back to you within 24-48 hours.</p>
            <p><strong>Email:</strong> subscriber.edu&#64;uncovermarkets.org</p>
            <p><strong>Phone:</strong> +91 7619625303</p>
          </div>

          <h3>Escalation Matrix</h3>
          <p>If your complaint is not resolved within the promised timeframe, you may escalate the matter:</p>
          <ul style="margin-bottom: 16px; padding-left: 20px;">
            <li><strong>Level 1:</strong> Customer Support (subscriber.edu&#64;uncovermarkets.org)</li>
            <li><strong>Level 2:</strong> Compliance Officer (compliance&#64;uncovermarkets.org)</li>
            <li><strong>Level 3:</strong> SEBI SCORES portal (<a href="https://scores.gov.in/" target="_blank" style="color: var(--gold); text-decoration: none;">https://scores.gov.in/</a>)</li>
          </ul>

          <p>For more details on the formal grievance process, please visit our <a routerLink="/grievance" style="color: var(--gold); text-decoration: none;">Grievance Redressal</a> page.</p>
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
    .last-updated { font-size: 15px; color: var(--muted); }
    .legal-content { font-size: 15px; line-height: 1.8; color: var(--muted); }
    .legal-content h3 { color: var(--white); font-family: 'Playfair Display', serif; font-size: 22px; margin: 32px 0 16px; font-weight: 600; }
    .legal-content p { margin-bottom: 16px; }
    .complaint-card { background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.2); padding: 24px; border-radius: 12px; margin: 24px 0; }
    .complaint-card h3 { margin-top: 0; color: var(--gold); }
    .fade-up { opacity: 0; animation: fadeUp 0.7s ease forwards; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class ComplaintBoardComponent { }
