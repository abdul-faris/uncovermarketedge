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
          <p>At Uncover Market Edge, we believe in providing the best possible service to our clients. If you have any grievances or complaints regarding our services, please follow the steps below for resolution:</p>
          
          <h3>Step 1: Contact Customer Support</h3>
          <p>In case of any query, concern, or grievance, you can first reach out to our Customer Support team at <strong>subscriber.edu&#64;uncovermarkets.org</strong> or call us at <strong>+91 7619625303</strong>. We aim to resolve all complaints within 48-72 working hours.</p>
          
          <h3>Step 2: Compliance Officer</h3>
          <p>If your grievance is not resolved satisfactorily by our support team, you may escalate the matter to our Compliance Officer.</p>
          <ul style="margin-bottom: 16px; padding-left: 20px;">
            <li><strong>Email:</strong> compliance&#64;uncovermarkets.org</li>
            <li><strong>Address:</strong> F-25/57, Greenview Appartments, Sector-3, Rohini, DELHI, 110085</li>
          </ul>
          
          <h3>Step 3: SEBI SCORES</h3>
          <p>If you are still not satisfied with the resolution provided, you may lodge your complaint with the Securities and Exchange Board of India (SEBI) on the SCORES (SEBI Complaints Redress System) portal at <a href="https://scores.gov.in/" target="_blank" style="color: var(--gold); text-decoration: none;">https://scores.gov.in/</a>. You may also download the SEBI SCORES app from the App Store or Google Play Store.</p>
          <p><strong>SEBI Registration Number:</strong> INH000026859</p>
          
          <h3>Step 4: ODR Portal</h3>
          <p>Alternatively, disputes can be resolved through the Online Dispute Resolution (ODR) portal introduced by SEBI. The SMART ODR portal can be accessed at <a href="https://smartodr.in/" target="_blank" style="color: var(--gold); text-decoration: none;">https://smartodr.in/</a>.</p>
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
export class GrievanceComponent { }
