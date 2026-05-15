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
          <p>You agree and understand that the information and material contained in this website implies and constitutes your consent to the terms and conditions mentioned. You also agree that "Uncover Market edge Research." can modify or alter the terms and conditions of the use of this service without any liability. "Uncover Market edge Research." reserves the right to make modifications and alterations to the content of the website. Users are advised to use the data for the purpose of information only and rely on their own judgment while making investment decisions. The investments discussed or recommended may not be suitable for all investors. "Uncover Market edge Research.". does not warranty the timeliness, accuracy or quality of the electronic content. The content of the website cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from "Uncover Market edge Research.". We reserve the right to terminate the accounts of subscribers / customers, who violate the proprietary rights, in addition to necessary legal action. "Uncover Market edge Research." and its owners/affiliates are not liable for damages caused by any performance, failure of performance, error, omission, interruption, deletion, defect, delay in transmission or operations, computer virus, communications line failure, and unauthorized access to the personal accounts. "Uncover Market edge Research." is not responsible for any technical failure or malfunctioning of the software or delays of any kind. We are also not responsible for non-receipt of registration details or e-mails. Users shall bear all responsibility of keeping the password secure. This website is for the exclusive purpose of transactions to be carried out within the territorial jurisdiction of India and all such transactions shall be governed by the laws in India. Notice is hereby given that Non Resident Indians (NRI’s) and Foreign Nationals accessing this web site and opting to transact thereon shall do so after due verification at their end of their eligibility to do so "Uncover Market edge Research.". undertakes no responsibility for such pre-eligibility of qualification on part of Non-Resident Indians (NRI’s) or Foreign Nationals to transact on this website. "Uncover Market edge Research." along with its directors, employees, associates or other representatives and its Affiliates along with its directors, employees, associates or other representatives shall not be liable for damages or injury arising out of or in connection with the use of the Website or its non-use including non-availability, compensatory, direct, indirect or consequential damages, loss of data, income or profit, loss of or damage to property (including without limitation loss of profits, loss or corruption of data, loss of goodwill, work stoppage, computer failure or malfunction, or interruption of business; under any contract, negligence, strict liability or other theory arising out of or relating in any way to the Website, site-related services, or any products or services and claims of third parties damages or injury caused by any performance, failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communications line failure, theft or destruction or unauthorized access to, alteration of, or use of information, whether resulting, in whole or in part, from or relating to any of the services offered or displayed by "Uncover Market edge Research.". on the Website . This disclaimer shall be applicable to any person visiting /accessing the Website and/or a Customer entering into an agreement related to availing of the Service offered by "Uncover Market edge Research.".</p>
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
export class TermsConditionsComponent { }
