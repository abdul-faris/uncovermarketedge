import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />

    <main class="contact-page">

      <!-- ── Hero banner ── -->
      <section class="contact-hero">
        <div class="ch-bg"></div>
        <div class="ch-grid"></div>
        <div class="ch-content">
          <div class="eyebrow fade-up">Get In Touch</div>
          <h1 class="fade-up delay-1">Let's Start a <em>Conversation</em></h1>
          <p class="ch-sub fade-up delay-2">
            Reach out to our team of SEBI-registered analysts. We'll help you
            find the right subscription plan and answer any questions you have.
          </p>
        </div>
      </section>

      <!-- ── Main content: form + info ── -->
      <section class="contact-body">
        <div class="contact-inner">

          <!-- LEFT: Contact info -->
          <aside class="contact-info fade-up">
            <div class="info-card">
              <div class="info-label">Corporate Office</div>
              <div class="info-entries">
                <div class="info-entry">
                  <span class="info-icon">📍</span>
                  <div>
                    <div class="info-title">Address</div>
                    <div class="info-val">Darpan Aggarwal, F-25/57 sector 3 rohini,<br>Delhi 110085</div>
                  </div>
                </div>
                <div class="info-entry">
                  <span class="info-icon">📧</span>
                  <div>
                    <div class="info-title">Email</div>
                    <a href="mailto:subscriber.edu@uncovermarkets.org" class="info-link">subscriber.edu&#64;uncovermarkets.org</a>
                  </div>
                </div>
                <div class="info-entry">
                  <span class="info-icon">📞</span>
                  <div>
                    <div class="info-title">Phone</div>
                    <a href="tel:+917827384962" class="info-link">+91 7827 384 962</a><br>
                  </div>
                </div>
                <div class="info-entry">
                  <span class="info-icon">🕐</span>
                  <div>
                    <div class="info-title">Business Hours</div>
                    <div class="info-val">Mon – Fri: 9:00 AM – 6:00 PM IST<br>Sat: 10:00 AM – 2:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sebi-card">
              <div class="sebi-row"><strong>SEBI Reg. No.</strong><span>INH000013299</span></div>
              <div class="sebi-row"><strong>BASL Member</strong><span>Registered</span></div>
              <div class="sebi-row"><strong>NISM Certified</strong><span>Yes</span></div>
              <p class="sebi-note">
                Registration granted by SEBI and certification from NISM in no way guarantee
                performance of the intermediary or provide any assurance of returns to investors.
              </p>
            </div>

            <!-- Services quick links -->
            <div class="quick-links">
              <div class="ql-label">Interested in</div>
              <div class="ql-grid">
                @for (s of services; track s) {
                  <span class="ql-chip">{{ s }}</span>
                }
              </div>
            </div>
          </aside>

          <!-- RIGHT: Form -->
          <div class="contact-form-wrap fade-up delay-1">
            @if (!submitted()) {
              <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
                <div class="form-header">
                  <div class="form-title">Send us a Message</div>
                  <div class="form-sub">We typically respond within one business day.</div>
                </div>

                <!-- Name row -->
                <div class="form-row">
                  <div class="form-group" [class.error]="isDirty('firstName')">
                    <label for="firstName">First Name <span class="req">*</span></label>
                    <input id="firstName" type="text" formControlName="firstName" placeholder="Rahul" />
                    @if (isDirty('firstName')) {
                      <span class="err-msg">First name is required</span>
                    }
                  </div>
                  <div class="form-group" [class.error]="isDirty('lastName')">
                    <label for="lastName">Last Name <span class="req">*</span></label>
                    <input id="lastName" type="text" formControlName="lastName" placeholder="Sharma" />
                    @if (isDirty('lastName')) {
                      <span class="err-msg">Last name is required</span>
                    }
                  </div>
                </div>

                <!-- Email + Phone -->
                <div class="form-row">
                  <div class="form-group" [class.error]="isDirty('email')">
                    <label for="email">Email Address <span class="req">*</span></label>
                    <input id="email" type="email" formControlName="email" placeholder="rahul@example.com" />
                    @if (isDirty('email')) {
                      <span class="err-msg">Enter a valid email address</span>
                    }
                  </div>
                  <div class="form-group" [class.error]="isDirty('phone')">
                    <label for="phone">Phone Number <span class="req">*</span></label>
                    <input id="phone" type="tel" formControlName="phone" placeholder="+91 98765 43210" />
                    @if (isDirty('phone')) {
                      <span class="err-msg">Enter a valid 10-digit phone number</span>
                    }
                  </div>
                </div>

                <!-- Service interest -->
                <div class="form-group" [class.error]="isDirty('service')">
                  <label for="service">Service of Interest <span class="req">*</span></label>
                  <select id="service" formControlName="service">
                    <option value="" disabled selected>Select a service…</option>
                    @for (s of services; track s) {
                      <option [value]="s">{{ s }}</option>
                    }
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  @if (isDirty('service')) {
                    <span class="err-msg">Please select a service</span>
                  }
                </div>

                <!-- Subscription plan -->
                <div class="form-group">
                  <label>Preferred Plan</label>
                  <div class="plan-options">
                    @for (plan of plans; track plan.value) {
                      <label class="plan-chip" [class.active]="form.get('plan')?.value === plan.value">
                        <input type="radio" formControlName="plan" [value]="plan.value" />
                        <span>{{ plan.label }}</span>
                      </label>
                    }
                  </div>
                </div>

                <!-- Message -->
                <div class="form-group" [class.error]="isDirty('message')">
                  <label for="message">Message <span class="req">*</span></label>
                  <textarea id="message" formControlName="message" rows="5"
                    placeholder="Tell us about your investment goals, preferred segments, or any specific questions…"></textarea>
                  @if (isDirty('message')) {
                    <span class="err-msg">Message must be at least 20 characters</span>
                  }
                  <div class="char-count">{{ form.get('message')?.value?.length ?? 0 }} / 500</div>
                </div>

                <!-- Disclaimer checkbox -->
                <div class="form-group checkbox-group" [class.error]="isDirty('agreed')">
                  <label class="checkbox-label">
                    <input type="checkbox" formControlName="agreed" />
                    <span class="checkbox-custom"></span>
                    <span class="checkbox-text">
                      I understand that investments in securities markets are subject to market
                      risks and I have read all related documents carefully.
                    </span>
                  </label>
                  @if (isDirty('agreed')) {
                    <span class="err-msg">You must agree to proceed</span>
                  }
                </div>

                <button type="submit" class="submit-btn" [disabled]="submitting()">
                  @if (submitting()) {
                    <span class="spinner"></span> Sending…
                  } @else {
                    Send Message →
                  }
                </button>
              </form>
            } @else {
              <!-- Success state -->
              <div class="success-state">
                <div class="success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. One of our analysts will get back to you within one business day.</p>
                <button class="submit-btn" style="margin-top: 28px" (click)="resetForm()">Send Another Message</button>
              </div>
            }
          </div>

        </div>
      </section>

      <!-- ── FAQ strip ── -->
      <section class="faq-section">
        <div class="faq-inner">
          <div class="faq-header">
            <div class="eyebrow">Common Questions</div>
            <h2 class="section-title">Frequently Asked <em>Questions</em></h2>
          </div>
          <div class="faq-list">
            @for (faq of faqs; track faq.q; let i = $index) {
              <div class="faq-item" [class.open]="openFaq() === i" (click)="toggleFaq(i)">
                <div class="faq-q">
                  <span>{{ faq.q }}</span>
                  <span class="faq-icon">{{ openFaq() === i ? '−' : '+' }}</span>
                </div>
                @if (openFaq() === i) {
                  <div class="faq-a">{{ faq.a }}</div>
                }
              </div>
            }
          </div>
        </div>
      </section>

    </main>

    <app-footer />
  `,
  styles: [`
    /* ── Page base ──────────────────────────────────────────────── */
    .contact-page {
      background: var(--dark);
      min-height: 100vh;
    }

    /* ── Hero ────────────────────────────────────────────────────── */
    .contact-hero {
      position: relative;
      overflow: hidden;
      padding: 100px 40px 80px;
      border-bottom: 1px solid var(--border);
    }

    .ch-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 70% 80% at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 65%),
        radial-gradient(ellipse 40% 60% at 85% 30%, rgba(201,168,76,0.04) 0%, transparent 60%);
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
    }

    /* ── Body ─────────────────────────────────────────────────────── */
    .contact-body {
      color: var(--white);
      line-height: 1.06;

      em { font-style: italic; color: var(--gold); }
    }

    .ch-sub {
      margin-top: 24px;
      font-size: 16px;
      color: var(--muted);
      max-width: 500px;
      line-height: 1.75;
    }

    /* ── Body ─────────────────────────────────────────────────── */
    .contact-body {
      padding: 80px 40px;
    }

    .contact-inner {
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: 56px;
      max-width: 1200px;
      margin: 0 auto;
      align-items: start;
    }

    /* ── Info sidebar ────────────────────────────────────────── */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: sticky;
      top: 90px;
    }

    .info-card {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }
    }

    .info-label {
      font-size: 11px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--gold);
      font-weight: 600;
      margin-bottom: 24px;
    }

    .info-entries { display: flex; flex-direction: column; gap: 20px; }

    .info-entry {
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }

    .info-icon { font-size: 18px; flex-shrink: 0; margin-top: 2px; }

    .info-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--muted);
      font-weight: 600;
      margin-bottom: 4px;
    }

    .info-val { font-size: 13.5px; color: var(--text); line-height: 1.6; }

    .info-link {
      font-size: 13.5px;
      color: var(--gold);
      text-decoration: none;
      display: block;
      line-height: 1.8;
      &:hover { color: var(--gold-light); }
    }

    .sebi-card {
      background: rgba(201,168,76,0.05);
      border: 1px solid rgba(201,168,76,0.2);
      border-radius: 12px;
      padding: 20px 24px;
    }

    .sebi-row {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);

      &:last-of-type { border-bottom: none; }

      strong { color: var(--muted); font-weight: 500; }
      span { color: var(--gold); font-weight: 600; }
    }

    .sebi-note {
      margin-top: 14px;
      font-size: 11px;
      color: var(--muted);
      line-height: 1.65;
    }

    .quick-links {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px 24px;
    }

    .ql-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--muted);
      font-weight: 600;
      margin-bottom: 14px;
    }

    .ql-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .ql-chip {
      font-size: 11px;
      padding: 5px 10px;
      border-radius: 20px;
      background: rgba(201,168,76,0.08);
      border: 1px solid var(--border);
      color: var(--muted);
    }

    /* ── Form ────────────────────────────────────────────────────── */
    .contact-form-wrap {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 48px;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }
    }

    .form-header {
      margin-bottom: 36px;
    }

    .form-title {
      font-family: 'Playfair Display', serif;
      font-size: 26px;
      font-weight: 700;
      color: var(--white);
    }

    .form-sub {
      font-size: 13.5px;
      color: var(--muted);
      margin-top: 6px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 20px;

      label {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--text);
        letter-spacing: 0.03em;
      }

      input, select, textarea {
        background: var(--dark3);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 12px 16px;
        font-size: 14px;
        color: var(--text);
        font-family: 'DM Sans', sans-serif;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
        width: 100%;

        &::placeholder { color: rgba(138,136,128,0.5); }

        &:focus {
          border-color: rgba(201,168,76,0.5);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.08);
        }

        option { background: var(--dark2); }
      }

      select { appearance: none; cursor: pointer;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a8880' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 14px center;
        padding-right: 40px;
      }

      textarea { resize: vertical; min-height: 130px; }

      &.error {
        input, select, textarea {
          border-color: rgba(239,68,68,0.5);
          box-shadow: 0 0 0 3px rgba(239,68,68,0.06);
        }
      }
    }

    .req { color: var(--gold); }

    .err-msg {
      font-size: 11.5px;
      color: #f87171;
    }

    .char-count {
      font-size: 11px;
      color: var(--muted);
      text-align: right;
    }

    /* Plan radio chips */
    .plan-options {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .plan-chip {
      cursor: pointer;

      input[type="radio"] { display: none; }

      span {
        display: block;
        font-size: 13px;
        padding: 8px 18px;
        border-radius: 20px;
        border: 1px solid var(--border);
        color: var(--muted);
        transition: all 0.2s;
      }

      &.active span, &:hover span {
        border-color: var(--gold);
        color: var(--gold);
        background: rgba(201,168,76,0.08);
      }
    }

    /* Checkbox */
    .checkbox-group { margin-bottom: 28px; }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      cursor: pointer;

      input[type="checkbox"] { display: none; }

      &:hover .checkbox-custom { border-color: var(--gold); }
    }

    .checkbox-custom {
      width: 18px;
      height: 18px;
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
          font-size: 11px;
          color: var(--dark);
          font-weight: 700;
        }
      }
    }

    .checkbox-text {
      font-size: 13px;
      color: var(--muted);
      line-height: 1.6;
    }

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

      p { font-size: 15px; color: var(--muted); max-width: 360px; margin: 0 auto; line-height: 1.7; }
    }

    /* ── FAQ ──────────────────────────────────────────────────── */
    .faq-section {
      background: var(--dark2);
      border-top: 1px solid var(--border);
      padding: 80px 40px;
    }

    .faq-inner {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-header { margin-bottom: 48px; }

    .faq-list { display: flex; flex-direction: column; gap: 12px; }

    .faq-item {
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: border-color 0.2s;

      &.open { border-color: rgba(201,168,76,0.35); }
      &:hover { border-color: rgba(201,168,76,0.25); }
    }

    .faq-q {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      font-size: 15px;
      font-weight: 500;
      color: var(--white);
      user-select: none;
    }

    .faq-icon {
      color: var(--gold);
      font-size: 22px;
      font-weight: 300;
      flex-shrink: 0;
    }

    .faq-a {
      padding: 0 24px 20px;
      font-size: 14px;
      color: var(--muted);
      line-height: 1.75;
      border-top: 1px solid var(--border);
      padding-top: 16px;
      animation: fadeUp 0.2s ease forwards;
    }

    /* ── Animations ───────────────────────────────────────────── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .fade-up { opacity: 0; animation: fadeUp 0.7s ease forwards; }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.3s; }

    /* ── Responsive ───────────────────────────────────────────── */
    @media (max-width: 1024px) {
      .contact-inner { grid-template-columns: 1fr; }
      .contact-info { position: static; }
    }

    @media (max-width: 700px) {
      .contact-hero { padding: 80px 20px 60px; }
      .contact-body { padding: 48px 20px; }
      .contact-form-wrap { padding: 28px 20px; }
      .form-row { grid-template-columns: 1fr; }
      .faq-section { padding: 60px 20px; }
    }
  `]
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  submitted = signal(false);
  submitting = signal(false);
  openFaq = signal<number | null>(null);

  services = [
    'Stock Cash Subscription',
    'Stock / Index Futures',
    'Stock / Index Options',
    'Commodity (MCX/NCDEX)',
    'Bullions Subscription',
    'Base Metals Subscription',
    'Energy Subscription',
    'HNI Subscription',
  ];

  plans = [
    { label: 'Regular', value: 'regular' },
    { label: 'Premium', value: 'premium' },
    { label: 'Ultra Premium', value: 'ultra-premium' },
    { label: 'Mentorship', value: 'mentorship' },
  ];

  faqs = [
    {
      q: 'How quickly will I receive a response after submitting this form?',
      a: 'Our team typically responds within one business day. For urgent queries, please call us directly on the numbers listed.'
    },
    {
      q: 'Is UncoverMarketEdge Research registered with SEBI?',
      a: 'Yes. UncoverMarketEdge Research is a SEBI-registered Research Analyst firm (Reg. No. INH000013299) and a member of BASL. Our analysts are NISM-certified.'
    },
    {
      q: 'Can I switch between subscription plans after joining?',
      a: 'Yes, you can upgrade or downgrade your plan at any time. Please contact our support team and they will assist you with the transition.'
    },
    {
      q: 'Are the tips and recommendations guaranteed to be profitable?',
      a: 'No. All investments are subject to market risk. Our recommendations are research-based but past performance is not indicative of future results. Please read all related documents before investing.'
    },
    {
      q: 'What markets and segments do you cover?',
      a: 'We cover equities (cash, futures, options), commodities (MCX/NCDEX), bullions, base metals, energy, and offer dedicated HNI advisory services.'
    },
  ];

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    email:     ['', [Validators.required, Validators.email]],
    phone:     ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    service:   ['', Validators.required],
    plan:      ['regular'],
    message:   ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
    agreed:    [false, Validators.requiredTrue],
  });

  isDirty(field: string): boolean {
    const ctrl = this.form.get(field) as AbstractControl;
    return ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }

onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.submitting.set(true);

    const v = this.form.value;

    const templateParams = {
      first_name: v.firstName,
      last_name: v.lastName,
      email: v.email,
      phone: v.phone,
      service: v.service,
      plan: v.plan,
      message: v.message
    };

    emailjs.send(
      'service_90kr8gp',    
      'template_sd2yrw9',   
      templateParams,
      'KIH4S5AuE1lX5KL_7'     
    ).then(
      () => {
        this.submitting.set(false);
        this.submitted.set(true);
        this.resetForm();
      },
      (error) => {
        console.error(error);
        console.log('FAILED...', error);
        alert(JSON.stringify(error));
        this.submitting.set(false);
        alert('Failed to send message');
      }
    );
  }

  resetForm(): void {
    this.form.reset({ plan: 'regular' });
    this.submitted.set(false);
  }

  toggleFaq(i: number): void {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }
}
