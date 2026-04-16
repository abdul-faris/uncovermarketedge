import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface BankAccount {
  bank: string;
  logo: string;
  color: string;
  holderName: string;
  accountNumber: string;
  ifsc: string;
  branch: string;
  accountType: string;
}

interface UpiDetail {
  label: string;
  id: string;
  app: string;
}

@Component({
  selector: 'app-bank-details',
  standalone: true,
  imports: [CommonModule, RouterLink, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />

    <main class="bank-page">

      <!-- Hero -->
      <section class="bank-hero">
        <div class="bh-bg"></div>
        <div class="bh-grid"></div>
        <div class="bh-inner">
          <div class="breadcrumb">
            <a routerLink="/">Home</a>
            <span class="sep">›</span>
            <span>Bank Details</span>
          </div>
          <div class="eyebrow fade-up">Payment Information</div>
          <h1 class="fade-up delay-1">Official <em>Bank Details</em></h1>
          <p class="ph-sub fade-up delay-2">
            Please use only the official company bank account or company UPI for all payments.
            We are not responsible for payments made to any personal account.
          </p>
        </div>
      </section>

      <!-- Warning banner -->
      <div class="warning-banner">
        <div class="wb-inner">
          <span class="wb-icon">⚠️</span>
          <div class="wb-text">
            <strong>Important Notice:</strong> Kindly do not make any payment to a savings account
            or personal UPI. If you are making any payment, please pay only to our Company bank
            account or Company UPI address. We are not responsible for any fraudulent transactions
            made to personal accounts.
          </div>
        </div>
      </div>

      <!-- Bank accounts -->
      <section class="bank-body">
        <div class="bank-inner">

          <div class="section-header">
            <div class="eyebrow">Payment Methods</div>
            <h2 class="section-title">Our Official <em>Bank Accounts</em></h2>
            <p class="section-sub">Verify the account holder name before making any transfer.</p>
          </div>

          <div class="accounts-grid">
            @for (account of bankAccounts; track account.accountNumber) {
              <div class="account-card">
                <div class="card-top" [style.background]="account.color + '12'" [style.border-color]="account.color + '30'">
                  <div class="bank-logo-wrap" [style.background]="account.color + '20'" [style.border-color]="account.color + '40'">
                    <span class="bank-logo">{{ account.logo }}</span>
                  </div>
                  <div>
                    <div class="bank-name">{{ account.bank }}</div>
                    <div class="account-type-badge">{{ account.accountType }}</div>
                  </div>
                </div>

                <div class="account-details">
                  <div class="detail-row">
                    <span class="detail-label">Account Holder</span>
                    <span class="detail-val holder">{{ account.holderName }}</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Account Number</span>
                    <div class="detail-right">
                      <span class="detail-val mono">{{ account.accountNumber }}</span>
                      <button class="copy-btn" (click)="copy(account.accountNumber)" title="Copy">
                        {{ copied() === account.accountNumber ? '✓' : '⧉' }}
                      </button>
                    </div>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">IFSC Code</span>
                    <div class="detail-right">
                      <span class="detail-val mono">{{ account.ifsc }}</span>
                      <button class="copy-btn" (click)="copy(account.ifsc)" title="Copy">
                        {{ copied() === account.ifsc ? '✓' : '⧉' }}
                      </button>
                    </div>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">Home Branch</span>
                    <span class="detail-val">{{ account.branch }}</span>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- UPI section -->
          <div class="upi-section">
            <div class="upi-header">
              <div class="eyebrow" style="margin-bottom: 8px">Digital Payments</div>
              <h3 class="upi-title">Company <em>UPI Details</em></h3>
            </div>
            <div class="upi-cards">
              @for (upi of upiDetails; track upi.id) {
                <div class="upi-card">
                  <div class="upi-app-badge">{{ upi.app }}</div>
                  <div class="upi-label">{{ upi.label }}</div>
                  <div class="upi-id-row">
                    <span class="upi-id">{{ upi.id }}</span>
                    <button class="copy-btn" (click)="copy(upi.id)" title="Copy UPI ID">
                      {{ copied() === upi.id ? '✓' : '⧉' }}
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- RTGS/NEFT note -->
          <div class="transfer-note">
            <div class="tn-icon">🏦</div>
            <div>
              <div class="tn-title">For RTGS / NEFT / IMPS Transfers</div>
              <p class="tn-text">
                Use any of the bank account details above. RTGS is available on all working days from
                7:00 AM to 6:00 PM. NEFT and IMPS are available 24×7. Please share your payment
                confirmation screenshot on our WhatsApp or email for faster activation.
              </p>
            </div>
          </div>

          <!-- Disclaimer box -->
          <div class="bank-disclaimer">
            <div class="bd-icon">⚠</div>
            <div>
              <strong>Payment Disclaimer:</strong> MarketEdge Research Private Limited will never
              ask you to transfer money to any personal account, personal UPI ID, or third-party
              wallet. Always verify the account holder name before making any transfer.
              For any payment-related queries, contact us at
              <a href="mailto:support@marketedge.com">support&#64;marketedge.com</a> or
              <a href="tel:+919999000001">+91 9999 000 001</a>.
            </div>
          </div>

        </div>
      </section>

    </main>

    <app-footer />
  `,
  styles: [`
    .bank-page { background: var(--dark); min-height: 100vh; }

    /* ── Hero ───────────────────────────────────────────────────── */
    .bank-hero {
      position: relative; overflow: hidden;
      padding: 60px 40px 50px;
      background: var(--dark2); border-bottom: 1px solid var(--border);
    }
    .bh-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 100% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 65%);
    }
    .bh-grid {
      position: absolute; inset: 0; opacity: 0.03;
      background-image:
        linear-gradient(rgba(201,168,76,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .bh-inner { position: relative; max-width: 1200px; margin: 0 auto; }

    .breadcrumb {
      display: flex; align-items: center; gap: 8px;
      font-size: 13px; color: var(--muted); margin-bottom: 20px;
      a { color: var(--gold); text-decoration: none; &:hover { color: var(--gold-light); } }
      .sep { color: var(--border); font-size: 16px; }
    }

    .eyebrow {
      font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
      text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(36px, 5vw, 64px); font-weight: 700;
      color: var(--white); line-height: 1.08;
      em { font-style: italic; color: var(--gold); }
    }

    .ph-sub {
      margin-top: 18px; font-size: 15px; color: var(--muted);
      max-width: 520px; line-height: 1.75;
    }

    /* ── Warning banner ───────────────────────────────────────── */
    .warning-banner {
      background: rgba(239,68,68,0.08);
      border-top: 1px solid rgba(239,68,68,0.2);
      border-bottom: 1px solid rgba(239,68,68,0.2);
      padding: 16px 40px;
    }
    .wb-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; align-items: flex-start; gap: 14px;
    }
    .wb-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
    .wb-text {
      font-size: 13.5px; color: #fca5a5; line-height: 1.65;
      strong { color: #f87171; }
    }

    /* ── Body ───────────────────────────────────────────────────── */
    .bank-body { padding: 60px 40px 80px; }
    .bank-inner { max-width: 1200px; margin: 0 auto; }

    .section-header { margin-bottom: 48px; }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(28px, 3.5vw, 44px); font-weight: 700;
      color: var(--white); line-height: 1.1; margin-top: 8px;
      em { font-style: italic; color: var(--gold); }
    }
    .section-sub { margin-top: 10px; font-size: 15px; color: var(--muted); }

    /* ── Account cards ────────────────────────────────────────── */
    .accounts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 700px));
      justify-content: center;
      gap: 24px;
      margin-bottom: 48px
    }

    .account-card {
      background: var(--dark2); border: 1px solid var(--border);
      border-radius: 18px; overflow: hidden;
      transition: border-color 0.25s, transform 0.25s;
      width: 100%;
      max-width: 700px;
      &:hover {
        border-color: rgba(201,168,76,0.3);
        transform: translateY(-2px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.25);
      }
    }

    .card-top {
      display: flex; align-items: center; gap: 16px;
      padding: 24px 28px;
      border-bottom: 1px solid var(--border);
      background: rgba(201,168,76,0.04);
    }

    .bank-logo-wrap {
      width: 56px; height: 56px; border-radius: 14px;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.2);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .bank-logo { font-size: 26px; }

    .bank-name {
      font-family: 'Playfair Display', serif;
      font-size: 18px; font-weight: 700; color: var(--white);
    }
    .account-type-badge {
      display: inline-block; margin-top: 4px;
      font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--gold);
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.2);
      border-radius: 20px; padding: 2px 10px;
    }

    .account-details {
      padding: 24px 28px;
      display: flex; flex-direction: column; gap: 14px;
    }

    .detail-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 0; border-bottom: 1px solid var(--border);
      &:last-child { border: none; }
    }

    .detail-label { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.07em; font-weight: 600; }
    .detail-right { display: flex; align-items: center; gap: 8px; }
    .detail-val {
      font-size: 14px; color: var(--text); font-weight: 500;
      &.holder { color: var(--white); font-weight: 600; font-size: 15px; }
      &.mono { font-family: 'Courier New', monospace; letter-spacing: 0.05em; color: var(--gold); font-size: 15px; }
    }

    .copy-btn {
      background: var(--dark3); border: 1px solid var(--border);
      color: var(--muted); width: 28px; height: 28px; border-radius: 6px;
      cursor: pointer; font-size: 13px; display: flex; align-items: center; justify-content: center;
      transition: all 0.15s;
      &:hover { color: var(--gold); border-color: var(--gold); }
    }

    /* ── UPI section ──────────────────────────────────────────── */
    .upi-section {
      margin-bottom: 40px;
    }
    .upi-title {
      font-family: 'Playfair Display', serif;
      font-size: 26px; font-weight: 700; color: var(--white);
      margin-bottom: 28px;
      em { font-style: italic; color: var(--gold); }
    }
    .upi-cards {
      display: flex; flex-wrap: wrap; gap: 16px;
    }
    .upi-card {
      background: var(--dark2); border: 1px solid var(--border);
      border-radius: 14px; padding: 22px 28px;
      min-width: 260px; flex: 1;
      transition: border-color 0.2s;
      &:hover { border-color: rgba(201,168,76,0.3); }
    }
    .upi-app-badge {
      display: inline-block; margin-bottom: 10px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--dark);
      background: var(--gold); border-radius: 20px; padding: 3px 10px;
    }
    .upi-label { font-size: 12px; color: var(--muted); margin-bottom: 8px; letter-spacing: 0.04em; text-transform: uppercase; font-weight: 600; }
    .upi-id-row { display: flex; align-items: center; gap: 10px; }
    .upi-id { font-size: 16px; font-weight: 600; color: var(--white); font-family: 'Courier New', monospace; letter-spacing: 0.03em; }

    /* ── Transfer note ────────────────────────────────────────── */
    .transfer-note {
      display: flex; gap: 16px; align-items: flex-start;
      background: var(--dark2); border: 1px solid var(--border);
      border-left: 3px solid var(--gold);
      border-radius: 0 12px 12px 0; padding: 22px 24px;
      margin-bottom: 24px;
    }
    .tn-icon { font-size: 28px; flex-shrink: 0; }
    .tn-title { font-size: 15px; font-weight: 600; color: var(--white); margin-bottom: 8px; }
    .tn-text { font-size: 13.5px; color: var(--muted); line-height: 1.7; }

    /* ── Disclaimer ───────────────────────────────────────────── */
    .bank-disclaimer {
      display: flex; gap: 14px; align-items: flex-start;
      background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.15);
      border-radius: 12px; padding: 20px 24px;
      font-size: 13.5px; color: #fca5a5; line-height: 1.7;
      .bd-icon { font-size: 22px; flex-shrink: 0; }
      strong { color: #f87171; }
      a { color: var(--gold); text-decoration: none; &:hover { color: var(--gold-light); } }
    }

    /* ── Animations ───────────────────────────────────────────── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up  { opacity: 0; animation: fadeUp 0.6s ease forwards; }
    .delay-1  { animation-delay: 0.15s; }
    .delay-2  { animation-delay: 0.3s; }

    /* ── Responsive ───────────────────────────────────────────── */
    @media (max-width: 900px) {
      .bank-hero { padding: 50px 20px 40px; }
      .warning-banner { padding: 14px 20px; }
      .bank-body { padding: 40px 20px 60px; }
      .accounts-grid { grid-template-columns: 1fr; }
      .upi-cards { flex-direction: column; }
    }
  `]
})
export class BankDetailsComponent {
  copied = signal<string>('');

  bankAccounts: BankAccount[] = [
   {
      bank: 'Kotak Bank',
      logo: '🏛️',
      color: '#8b1a1a',
      holderName: 'DARPAN AGGARWAL KARTA',
      accountNumber: '9650174842',
      ifsc: 'KKBK0004601',
      branch: 'DELHI-PEERAGARHI',
      accountType: 'Current Account'
    }
  ];

  upiDetails: UpiDetail[] = [
    { label: 'Company UPI ID', id: '9650174842um@kotak', app: 'Kotak' },

  ];

  copy(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copied.set(text);
      setTimeout(() => this.copied.set(''), 2000);
    });
  }
}
