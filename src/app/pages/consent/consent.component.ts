import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-consent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />

    <main class="consent-page">
      <section class="consent-hero">
        <div class="ch-bg"></div>
        <div class="ch-grid"></div>
        <div class="ch-content">
          <div class="eyebrow fade-up">Legal</div>
          <h1 class="fade-up delay-1">Client <em>Consent</em> Form</h1>
          <p class="ch-sub fade-up delay-2">
            UncoverMarketEdge Research Registration No.: INH000013299
          </p>
        </div>
      </section>

      <section class="consent-body">
        <div class="consent-inner fade-up delay-3">
          @if (!submitted()) {
            <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="consent-form">
              
              <!-- Form Fields -->
              <div class="form-row">
                <div class="form-group" [class.error]="isDirty('fullName')">
                  <label for="fullName">Full Name (As per Aadhaar) <span class="req">*</span></label>
                  <input id="fullName" type="text" formControlName="fullName" placeholder="Rahul Sharma" />
                  @if (isDirty('fullName')) {
                    <span class="err-msg">Full name is required</span>
                  }
                </div>
                <div class="form-group" [class.error]="isDirty('dob')">
                  <label for="dob">Date of Birth <span class="req">*</span></label>
                  <input id="dob" type="date" formControlName="dob" />
                  @if (isDirty('dob')) {
                    <span class="err-msg">Date of Birth is required</span>
                  }
                </div>
              </div>

              <div class="form-row">
                <div class="form-group" [class.error]="isDirty('phone')">
                  <label for="phone">WhatsApp/ Phone Number <span class="req">*</span></label>
                  <input id="phone" type="tel" formControlName="phone" placeholder="+91 98765 43210" />
                  @if (isDirty('phone')) {
                    <span class="err-msg">Valid phone number is required</span>
                  }
                </div>
                <div class="form-group" [class.error]="isDirty('pan')">
                  <label for="pan">PAN Number <span class="req">*</span></label>
                  <input id="pan" type="text" formControlName="pan" placeholder="ABCDE1234F" style="text-transform: uppercase;" />
                  @if (isDirty('pan')) {
                    <span class="err-msg">Valid PAN is required</span>
                  }
                </div>
              </div>

              <div class="form-row">
                <div class="form-group" [class.error]="isDirty('email')">
                  <label for="email">Email ID <span class="req">*</span></label>
                  <input id="email" type="email" formControlName="email" placeholder="rahul@example.com" />
                  @if (isDirty('email')) {
                    <span class="err-msg">Valid email is required</span>
                  }
                </div>
              </div>

              <!-- Signature -->
              <div class="form-group" [class.error]="isDirty('signature')">
                <label for="signature">Your Signature (Type Full Name) <span class="req">*</span></label>
                <input id="signature" type="text" formControlName="signature" placeholder="Rahul Sharma" />
                @if (isDirty('signature')) {
                  <span class="err-msg">Signature is required</span>
                }
              </div>

              <!-- Terms and Conditions -->
              <div class="form-group terms-section">
                <label>Terms and Conditions</label>
                <div class="terms-box">
                  <p><strong>Parties to these Terms and Conditions:</strong></p>
                  <p>i. Research Analyst: UncoverMarketEdge Research a SEBI Registered Research Analyst, holding Registration No. <strong>INH000013299</strong>, with its registered office located at Darpan Aggarwal, F-25/57 sector 3 rohini, Delhi 110085. hereinafter referred to as the "Research Analyst" or "RA";</p>
                  <p>ii. Client: The individual or entity subscribing to or availing research services provided by the Research Analyst, hereinafter referred to as the "Client."</p>
                  <p><strong>1. Scope of Services</strong></p>
                  <p>The Research Analyst shall provide research and recommendations on securities, commodities, and other financial instruments as per the chosen subscription plan. The recommendations are purely based on technical and fundamental analysis and do not guarantee any specific returns.</p>
                  <p><strong>2. Risk Acknowledgment</strong></p>
                  <p>Investments in the securities market are subject to market risks. Read all the related documents carefully before investing. The Client acknowledges that trading and investing involve significant risk, and the Client is solely responsible for their financial decisions.</p>
                </div>
              </div>

              <!-- Consent Checkboxes -->
              <div class="form-group checkbox-group" [class.error]="isDirty('acceptTerms')">
                <label class="checkbox-label">
                  <input type="checkbox" formControlName="acceptTerms" />
                  <span class="checkbox-custom"></span>
                  <span class="checkbox-text">I accept the Terms and Conditions</span>
                </label>
                @if (isDirty('acceptTerms')) {
                  <span class="err-msg" style="display:block; margin-top: 4px;">You must accept the terms</span>
                }
              </div>

              <div class="form-group checkbox-group" [class.error]="isDirty('consentKyc')">
                <label class="checkbox-label">
                  <input type="checkbox" formControlName="consentKyc" />
                  <span class="checkbox-custom"></span>
                  <span class="checkbox-text">I provide my consent to initiate the services and fetch my KYC details</span>
                </label>
                @if (isDirty('consentKyc')) {
                  <span class="err-msg" style="display:block; margin-top: 4px;">You must provide consent for KYC</span>
                }
              </div>

              <button type="submit" class="submit-btn" [disabled]="submitting()">
                @if (submitting()) {
                  <span class="spinner"></span> Processing…
                } @else {
                  SUBMIT
                }
              </button>
            </form>
          } @else {
            <div class="success-state">
              <div class="success-icon">✓</div>
              <h3>Consent Submitted Successfully</h3>
              <p>Thank you for providing your consent. Our team will verify your details and activate your services shortly.</p>
              <button class="btn-primary" style="margin-top: 28px" (click)="resetForm()">Return to Form</button>
            </div>
          }
        </div>
      </section>
    </main>

    <app-footer />
  `,
  styles: [`
    .consent-page {
      background: var(--dark);
      min-height: 100vh;
    }

    /* ── Hero ────────────────────────────────────────────────────── */
    .consent-hero {
      position: relative;
      overflow: hidden;
      padding: 100px 40px 60px;
      border-bottom: 1px solid var(--border);
      text-align: center;
    }

    .ch-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%);
    }

    .ch-grid {
      position: absolute; inset: 0; opacity: 0.035;
      background-image:
        linear-gradient(rgba(201,168,76,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .ch-content {
      position: relative;
      max-width: 760px;
      margin: 0 auto;
    }
    
    .consent-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(32px, 4vw, 52px);
      font-weight: 700;
      color: var(--white);
      line-height: 1.1;
      margin-bottom: 12px;
      em { font-style: italic; color: var(--gold); }
    }

    .ch-sub {
      font-size: 18px;
      color: var(--muted);
      line-height: 1.75;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 16px;
    }

    /* ── Body ─────────────────────────────────────────────────────── */
    .consent-body {
      padding: 60px 20px 100px;
      color: var(--white);
    }

    .consent-inner {
      max-width: 800px;
      margin: 0 auto;
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 48px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; height: 3px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }
    }

    /* ── Form ────────────────────────────────────────────────────── */
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 24px;

      label {
        font-size: 13px;
        font-weight: 600;
        color: var(--text);
        letter-spacing: 0.03em;
      }

      input[type="text"], input[type="email"], input[type="tel"], input[type="date"] {
        background: var(--dark3);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 14px 16px;
        font-size: 14.5px;
        color: var(--text);
        font-family: 'DM Sans', sans-serif;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
        width: 100%;

        &::placeholder { color: rgba(138,136,128,0.4); }

        &:focus {
          border-color: rgba(201,168,76,0.5);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.08);
        }
      }
      
      /* specifically style date picker icon for dark theme */
      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
        opacity: 0.6;
        cursor: pointer;
      }

      &.error {
        input {
          border-color: rgba(239,68,68,0.5);
          box-shadow: 0 0 0 3px rgba(239,68,68,0.06);
        }
        .signature-container {
          border-color: rgba(239,68,68,0.5);
        }
      }
    }

    .req { color: var(--gold); }
    .err-msg { font-size: 12px; color: #f87171; }

    /* Signature */
    .signature-container {
      background: #fdfdfd; /* Always light background for signature */
      border: 1px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      max-width: 400px;
      touch-action: none; /* Prevent scrolling on touch */
    }

    .signature-pad {
      display: block;
      width: 100%;
      height: 150px;
      cursor: crosshair;
    }

    .btn-clear {
      align-self: flex-start;
      background: rgba(201,168,76,0.1);
      color: var(--gold);
      border: 1px solid rgba(201,168,76,0.3);
      border-radius: 6px;
      padding: 6px 16px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 8px;
      transition: all 0.2s;
      
      &:hover {
        background: rgba(201,168,76,0.2);
        color: var(--white);
      }
    }

    /* Terms Box */
    .terms-section { margin-top: 32px; }
    
    .terms-box {
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 20px;
      height: 200px;
      overflow-y: auto;
      font-size: 13.5px;
      color: var(--muted);
      line-height: 1.6;

      p { margin-bottom: 12px; }
      p:last-child { margin-bottom: 0; }
      strong { color: var(--text); }
      
      &::-webkit-scrollbar { width: 8px; }
      &::-webkit-scrollbar-track { background: var(--dark2); border-radius: 4px; }
      &::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 4px; }
      &::-webkit-scrollbar-thumb:hover { background: rgba(201,168,76,0.5); }
    }

    /* Checkbox */
    .checkbox-group { margin-bottom: 16px; }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      cursor: pointer;

      input[type="checkbox"] { display: none; }

      &:hover .checkbox-custom { border-color: var(--gold); }
    }

    .checkbox-custom {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid var(--border);
      background: var(--dark3);
      flex-shrink: 0;
      margin-top: 2px;
      transition: all 0.2s;
      position: relative;

      .checkbox-label input:checked + & {
        background: var(--gold);
        border-color: var(--gold);

        &::after {
          content: '✓';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: var(--dark);
          font-weight: 700;
        }
      }
    }

    .checkbox-text {
      font-size: 14.5px;
      color: var(--text);
      line-height: 1.6;
    }

    /* Submit Button */
    .submit-btn {
      width: 100%;
      background: var(--gold);
      color: var(--dark);
      font-weight: 700;
      font-size: 15px;
      padding: 16px 32px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-family: 'DM Sans', sans-serif;
      margin-top: 32px;

      &:hover:not(:disabled) {
        background: var(--gold-light);
        transform: translateY(-1px);
        box-shadow: 0 8px 30px rgba(201,168,76,0.25);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .spinner {
      width: 16px; height: 16px;
      border: 2px solid rgba(0,0,0,0.2);
      border-top-color: var(--dark);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    /* Success state */
    .success-state {
      text-align: center;
      padding: 60px 20px;

      .success-icon {
        width: 72px; height: 72px;
        border-radius: 50%;
        background: rgba(201,168,76,0.12);
        border: 2px solid var(--gold);
        display: flex; align-items: center; justify-content: center;
        font-size: 32px;
        color: var(--gold);
        margin: 0 auto 28px;
      }

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        color: var(--white);
        margin-bottom: 12px;
      }

      p { font-size: 15px; color: var(--muted); max-width: 400px; margin: 0 auto; line-height: 1.7; }
    }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .fade-up { opacity: 0; animation: fadeUp 0.7s ease forwards; }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.3s; }
    .delay-3 { animation-delay: 0.45s; }

    @media (max-width: 700px) {
      .consent-hero { padding: 80px 20px 40px; }
      .consent-body { padding: 30px 16px 80px; }
      .consent-inner { padding: 32px 20px; }
      .form-row { grid-template-columns: 1fr; gap: 0; }
    }
  `]
})
export class ConsentComponent {

  private fb = inject(FormBuilder);

  submitted = signal(false);
  submitting = signal(false);

  form = this.fb.group({
    fullName: ['', Validators.required],
    dob: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{10,15}$/)]],
    pan: ['', [Validators.required, Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i)]],
    email: ['', [Validators.required, Validators.email]],
    signature: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
    consentKyc: [false, Validators.requiredTrue]
  });



  // --- Form Logic ---
  isDirty(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    const v = this.form.value;

    const templateParams = {
      full_name: v.fullName,
      dob: v.dob,
      phone: v.phone,
      pan: v.pan,
      email: v.email,
      signature: v.signature
    };

    emailjs.send(
      'service_90kr8gp',
      'template_0zrwpvy',  // Remember to change this to your new template ID later!
      templateParams,
      'KIH4S5AuE1lX5KL_7'
    ).then(
      () => {
        this.submitting.set(false);
        this.submitted.set(true);
      },
      (error) => {
        console.error('EmailJS Error:', error);
        this.submitting.set(false);
        alert('There was an error submitting your form. Please try again later.');
      }
    );
  }

  resetForm() {
    this.submitted.set(false);
    this.form.reset({ acceptTerms: false, consentKyc: false });
  }
}
