import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface PricingRow {
  service: string;
  icon: string;
  monthly: string;
  quarterly: string;
  halfYearly: string;
  risk: string;
  duration: string;
  recommendations: string;
  serviceType: string;
}

interface PricingTier {
  id: string;
  label: string;
  badge?: string;
  description: string;
  rows: PricingRow[];
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />

    <main class="pricing-page">

      <!-- Hero -->
      <section class="pricing-hero">
        <div class="ph-bg"></div>
        <div class="ph-grid"></div>
        <div class="ph-inner">
          <div class="breadcrumb">
            <a routerLink="/">Home</a>
            <span class="sep">›</span>
            <span>Pricing Calendar</span>
          </div>
          <div class="eyebrow fade-up">Subscription Plans</div>
          <h1 class="fade-up delay-1">Transparent <em>Pricing</em></h1>
          <p class="ph-sub fade-up delay-2">
            Choose the plan that fits your trading goals. All plans include SEBI-registered
            research with clear entry, exit, and stop-loss recommendations.
          </p>
        </div>
      </section>

      <!-- Tab switcher -->
      <div class="tab-bar">
        <div class="tab-inner">
          @for (tier of tiers; track tier.id) {
            <button
              class="tab-btn"
              [class.active]="activeTier() === tier.id"
              (click)="setTier(tier.id)">
              {{ tier.label }}
              @if (tier.badge) {
                <span class="tab-badge">{{ tier.badge }}</span>
              }
            </button>
          }
        </div>
      </div>

      <!-- Pricing content -->
      @for (tier of tiers; track tier.id) {
        @if (activeTier() === tier.id) {
          <section class="pricing-body">
            <div class="pricing-inner">

              <div class="tier-header">
                <div class="eyebrow">{{ tier.label }} Plan</div>
                <h2 class="section-title">{{ tier.label }} <em>Pricing</em></h2>
                <p class="tier-desc">{{ tier.description }}</p>
              </div>

              <div class="cards-grid">
                @for (row of tier.rows; track row.service) {
                  <div class="pricing-card">
                    <div class="card-header">
                      <span class="card-icon">{{ row.icon }}</span>
                      <h3>{{ row.service }}</h3>
                    </div>

                    <!-- Price table -->
                    <div class="price-table">
                      <div class="price-col">
                        <div class="price-period">Monthly</div>
                        <div class="price-val">{{ row.monthly }}</div>
                      </div>
                      <div class="price-divider"></div>
                      <div class="price-col">
                        <div class="price-period">Quarterly</div>
                        <div class="price-val">{{ row.quarterly }}</div>
                      </div>
                      <div class="price-divider"></div>
                      <div class="price-col">
                        <div class="price-period">Half Yearly</div>
                        <div class="price-val">{{ row.halfYearly }}</div>
                      </div>
                    </div>

                    <!-- Meta tags -->
                    <div class="meta-list">
                      <div class="meta-item">
                        <span class="meta-dot risk"></span>
                        <span class="meta-label">Risk</span>
                        <span class="meta-val" [class.very-high]="row.risk === 'Very High'" [class.high]="row.risk === 'High'">{{ row.risk }}</span>
                      </div>
                      <div class="meta-item">
                        <span class="meta-dot duration"></span>
                        <span class="meta-label">Duration</span>
                        <span class="meta-val">{{ row.duration }}</span>
                      </div>
                      <div class="meta-item">
                        <span class="meta-dot calls"></span>
                        <span class="meta-label">Calls/Day</span>
                        <span class="meta-val">{{ row.recommendations }}</span>
                      </div>
                      <div class="meta-item">
                        <span class="meta-dot type"></span>
                        <span class="meta-label">Delivery</span>
                        <span class="meta-val">{{ row.serviceType }}</span>
                      </div>
                    </div>

                    <button class="signup-btn" (click)="openModal(row)">
                      Enquire Now →
                    </button>
                  </div>
                }
              </div>

              <!-- Disclaimer -->
              <div class="pricing-disclaimer">
                ⚠ Investment in securities market are subject to market risks. Read all the related
                documents carefully before investing. Past performance is not indicative of future results.
              </div>

            </div>
          </section>
        }
      }

      <!-- Enquiry Modal -->
      @if (modalService()) {
        <div class="modal-overlay" (click)="closeModal()">
          <div class="modal" (click)="$event.stopPropagation()">
            <button class="modal-close" (click)="closeModal()">✕</button>
            <div class="modal-header">
              <div class="modal-icon">{{ modalService()!.icon }}</div>
              <h3>{{ modalService()!.service }}</h3>
              <p class="modal-tier">{{ activeTierLabel() }} Plan</p>
            </div>
            <div class="modal-prices">
              <div class="mp-row"><span>Monthly</span><strong>{{ modalService()!.monthly }}</strong></div>
              <div class="mp-row"><span>Quarterly</span><strong>{{ modalService()!.quarterly }}</strong></div>
              <div class="mp-row"><span>Half Yearly</span><strong>{{ modalService()!.halfYearly }}</strong></div>
            </div>
            <div class="modal-form">
              <input type="text" placeholder="Your Name" class="modal-input" />
              <input type="tel" placeholder="Phone Number" class="modal-input" />
              <input type="email" placeholder="Email Address" class="modal-input" />
              <button class="btn-primary" style="width:100%; justify-content:center; margin-top:4px">
                Send Enquiry →
              </button>
            </div>
            <p class="modal-note">
              Our team will call you within one business day to discuss this plan.
            </p>
          </div>
        </div>
      }

    </main>

    <app-footer />
  `,
  styles: [`
    .pricing-page { background: var(--dark); min-height: 100vh; }

    /* ── Hero ───────────────────────────────────────────────────── */
    .pricing-hero {
      position: relative; overflow: hidden;
      padding: 60px 40px 50px;
      background: var(--dark2);
      border-bottom: 1px solid var(--border);
    }
    .ph-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 100% at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 65%);
    }
    .ph-grid {
      position: absolute; inset: 0; opacity: 0.03;
      background-image:
        linear-gradient(rgba(201,168,76,1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .ph-inner { position: relative; max-width: 1200px; margin: 0 auto; }

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

    /* ── Tab bar ──────────────────────────────────────────────── */
    .tab-bar {
      background: var(--dark2);
      border-bottom: 1px solid var(--border);
      position: sticky; top: 70px; z-index: 50;
    }
    .tab-inner {
      max-width: 1200px; margin: 0 auto;
      padding: 0 40px;
      display: flex; gap: 4px;
    }
    .tab-btn {
      padding: 16px 28px;
      font-size: 14px; font-weight: 500;
      color: var(--muted);
      background: transparent; border: none; cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      display: flex; align-items: center; gap: 8px;
      font-family: 'DM Sans', sans-serif;

      &:hover { color: var(--white); }
      &.active {
        color: var(--gold);
        border-bottom-color: var(--gold);
      }
    }
    .tab-badge {
      font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
      background: var(--gold); color: var(--dark);
      padding: 2px 7px; border-radius: 20px;
      text-transform: uppercase;
    }

    /* ── Pricing body ────────────────────────────────────────── */
    .pricing-body { padding: 60px 40px 80px; }
    .pricing-inner { max-width: 1200px; margin: 0 auto; }

    .tier-header { margin-bottom: 48px; }
    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(28px, 3.5vw, 44px);
      font-weight: 700; color: var(--white); line-height: 1.1;
      em { font-style: italic; color: var(--gold); }
    }
    .tier-desc { margin-top: 12px; font-size: 15px; color: var(--muted); max-width: 560px; line-height: 1.7; }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }

    /* ── Pricing card ────────────────────────────────────────── */
    .pricing-card {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px;
      display: flex; flex-direction: column; gap: 0;
      transition: all 0.25s;
      position: relative; overflow: hidden;

      &::before {
        content: '';
        position: absolute; top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }

      &:hover {
        border-color: rgba(201,168,76,0.35);
        transform: translateY(-3px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
      }
    }

    .card-header {
      display: flex; align-items: center; gap: 14px;
      margin-bottom: 24px;
    }
    .card-icon {
      width: 44px; height: 44px;
      border-radius: 10px;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.2);
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; flex-shrink: 0;
    }
    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 16px; font-weight: 700; color: var(--white); line-height: 1.3;
    }

    // Price table
    .price-table {
      display: flex; align-items: stretch;
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .price-col {
      flex: 1; padding: 16px 12px; text-align: center;
    }
    .price-period {
      font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em;
      color: var(--muted); font-weight: 600; margin-bottom: 8px;
    }
    .price-val {
      font-family: 'Playfair Display', serif;
      font-size: 17px; font-weight: 700; color: var(--gold);
    }
    .price-divider {
      width: 1px; background: var(--border); flex-shrink: 0;
    }

    // Meta
    .meta-list {
      display: flex; flex-direction: column; gap: 8px;
      margin-bottom: 24px;
    }
    .meta-item {
      display: flex; align-items: center; gap: 10px;
      font-size: 13px;
    }
    .meta-dot {
      width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
      &.risk    { background: #f87171; }
      &.duration{ background: #60a5fa; }
      &.calls   { background: var(--gold); }
      &.type    { background: #34d399; }
    }
    .meta-label { color: var(--muted); min-width: 64px; }
    .meta-val   { color: var(--text); font-weight: 500;
      &.very-high { color: #f87171; }
      &.high      { color: #fb923c; }
    }

    .signup-btn {
      margin-top: auto;
      width: 100%;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.3);
      color: var(--gold);
      font-size: 13.5px; font-weight: 600;
      padding: 12px 20px; border-radius: 10px;
      cursor: pointer; transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
      letter-spacing: 0.02em;

      &:hover {
        background: var(--gold);
        color: var(--dark);
        border-color: var(--gold);
      }
    }

    .pricing-disclaimer {
      margin-top: 48px;
      background: rgba(239,68,68,0.06);
      border: 1px solid rgba(239,68,68,0.15);
      border-radius: 8px;
      padding: 16px 20px;
      font-size: 12.5px; color: #f87171; line-height: 1.65;
    }

    /* ── Modal ──────────────────────────────────────────────── */──
    .modal-overlay {
      position: fixed; inset: 0; z-index: 999;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.2s ease;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .modal {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 40px;
      width: 100%; max-width: 440px;
      position: relative;
      animation: slideUp 0.25s ease;
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .modal-close {
      position: absolute; top: 16px; right: 16px;
      background: var(--dark3); border: 1px solid var(--border);
      color: var(--muted); width: 32px; height: 32px; border-radius: 50%;
      cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
      &:hover { color: var(--white); border-color: var(--gold); }
    }

    .modal-header { text-align: center; margin-bottom: 24px;
      .modal-icon { font-size: 40px; margin-bottom: 12px; }
      h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--white); margin-bottom: 4px; }
      .modal-tier { font-size: 12px; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; }
    }

    .modal-prices {
      background: var(--dark3); border: 1px solid var(--border);
      border-radius: 12px; padding: 16px 20px;
      display: flex; flex-direction: column; gap: 10px;
      margin-bottom: 24px;
    }
    .mp-row {
      display: flex; justify-content: space-between; font-size: 14px;
      span { color: var(--muted); }
      strong { color: var(--gold); font-family: 'Playfair Display', serif; font-size: 16px; }
    }

    .modal-form { display: flex; flex-direction: column; gap: 12px; }
    .modal-input {
      background: var(--dark3); border: 1px solid var(--border);
      border-radius: 10px; padding: 12px 16px;
      font-size: 14px; color: var(--text); outline: none;
      font-family: 'DM Sans', sans-serif; width: 100%;
      transition: border-color 0.2s;
      &::placeholder { color: rgba(138,136,128,0.5); }
      &:focus { border-color: rgba(201,168,76,0.5); box-shadow: 0 0 0 3px rgba(201,168,76,0.08); }
    }

    .modal-note {
      margin-top: 14px; font-size: 12px; color: var(--muted);
      text-align: center; line-height: 1.6;
    }

    // ── Animations ────────────────────────────────────────────
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up  { opacity: 0; animation: fadeUp 0.6s ease forwards; }
    .delay-1  { animation-delay: 0.15s; }
    .delay-2  { animation-delay: 0.3s; }

    /* ── Responsive ───────────────────────────────────────────── */
    @media (max-width: 900px) {
      .pricing-hero { padding: 50px 20px 40px; }
      .tab-inner { padding: 0 20px; overflow-x: auto; }
      .tab-btn { padding: 14px 18px; white-space: nowrap; }
      .pricing-body { padding: 40px 20px 60px; }
      .cards-grid { grid-template-columns: 1fr; }
      .modal { padding: 28px 20px; }
    }
  `]
})
export class PricingComponent implements OnInit {
  private route = inject(ActivatedRoute);
  activeTier = signal<string>('regular');
  modalService = signal<PricingRow | null>(null);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const tier = params.get('tier');
      if (tier && ['regular', 'premium', 'ultra-premium'].includes(tier)) {
        this.activeTier.set(tier);
      }
    });
  }

  tiers: PricingTier[] = [
    {
      id: 'regular',
      label: 'Regular',
      description: 'Our entry-level subscription plan covering all major market segments with SMS-based recommendations and solid risk management.',
      rows: [
        { service: 'Stock Cash Subscription', icon: '📈', monthly: '₹35,555', quarterly: '₹85,555', halfYearly: '₹1,49,999', risk: 'High', duration: 'Intraday / Positional', recommendations: '1–2 Calls', serviceType: 'SMS' },
        { service: 'Stock / Index Futures', icon: '📊', monthly: '₹35,555', quarterly: '₹89,555', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '1–2 Calls', serviceType: 'SMS' },
        { service: 'Stock / Index Options', icon: '⚙️', monthly: '₹39,999', quarterly: '₹1,05,999', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'SMS' },
        { service: 'Commodity (MCX / NCDEX)', icon: '🌾', monthly: '₹75,555', quarterly: '₹99,999', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '1–2 Calls', serviceType: 'SMS' },
        { service: 'Bullions Subscription', icon: '🪙', monthly: '₹35,555', quarterly: '₹89,555', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '1–2 Calls', serviceType: 'SMS' },
        { service: 'Base Metals Subscription', icon: '⚒️', monthly: '₹49,999', quarterly: '₹75,555', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'SMS' },
        { service: 'Energy Subscription', icon: '⚡', monthly: '₹49,999', quarterly: '₹75,555', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'SMS' },
      ]
    },
    {
      id: 'premium',
      label: 'Premium',
      badge: 'Popular',
      description: 'Enhanced advisory with Chat & Voice support from a dedicated executive. Higher accuracy intraday calls with deeper market analysis.',
      rows: [
        { service: 'Stock Cash Subscription', icon: '📈', monthly: '₹55,555', quarterly: '₹1,29,999', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
        { service: 'Stock / Index Futures', icon: '📊', monthly: '₹69,999', quarterly: '₹1,29,999', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
        { service: 'Stock / Index Options', icon: '⚙️', monthly: '₹79,999', quarterly: '₹1,00,000', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
        { service: 'Dynamic Service (BTST / STBT / Swing)', icon: '🔄', monthly: '₹75,555', quarterly: '—', halfYearly: '—', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
        { service: 'Commodity (MCX / NCDEX)', icon: '🌾', monthly: '₹80,999', quarterly: '₹1,09,999', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
        { service: 'Bullions Subscription', icon: '🪙', monthly: '₹55,555', quarterly: '₹1,05,555', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
        { service: 'Base Metals Subscription', icon: '⚒️', monthly: '₹65,555', quarterly: '₹99,999', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
        { service: 'Energy Subscription', icon: '⚡', monthly: '₹65,555', quarterly: '₹99,999', halfYearly: '₹1,49,999', risk: 'Very High', duration: 'Intraday', recommendations: '1–2 Calls', serviceType: 'Chat / Voice with Executive' },
      ]
    },
    {
      id: 'ultra-premium',
      label: 'Ultra Premium',
      description: 'Our highest-tier service for serious traders — direct analyst access, HNI advisory, and bespoke strategies across all asset classes.',
      rows: [
        { service: 'Stock Cash Subscription', icon: '📈', monthly: '₹99,999', quarterly: '₹1,99,999', halfYearly: '₹2,99,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '2–3 Calls', serviceType: 'Direct Analyst Access' },
        { service: 'Stock / Index Futures', icon: '📊', monthly: '₹99,999', quarterly: '₹1,99,999', halfYearly: '₹2,99,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '2–3 Calls', serviceType: 'Direct Analyst Access' },
        { service: 'Stock / Index Options', icon: '⚙️', monthly: '₹1,09,999', quarterly: '₹2,19,999', halfYearly: '₹2,99,999', risk: 'Very High', duration: 'Intraday', recommendations: '2–3 Calls', serviceType: 'Direct Analyst Access' },
        { service: 'Commodity (MCX / NCDEX)', icon: '🌾', monthly: '₹1,19,999', quarterly: '₹2,29,999', halfYearly: '₹2,99,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '2–3 Calls', serviceType: 'Direct Analyst Access' },
        { service: 'Bullions Subscription', icon: '🪙', monthly: '₹89,999', quarterly: '₹1,79,999', halfYearly: '₹2,99,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '2–3 Calls', serviceType: 'Direct Analyst Access' },
        { service: 'Base Metals Subscription', icon: '⚒️', monthly: '₹89,999', quarterly: '₹1,79,999', halfYearly: '₹2,99,999', risk: 'Very High', duration: 'Intraday', recommendations: '2–3 Calls', serviceType: 'Direct Analyst Access' },
        { service: 'Energy Subscription', icon: '⚡', monthly: '₹89,999', quarterly: '₹1,79,999', halfYearly: '₹2,99,999', risk: 'Very High', duration: 'Intraday', recommendations: '2–3 Calls', serviceType: 'Direct Analyst Access' },
        { service: 'HNI Subscription', icon: '💼', monthly: '₹1,49,999', quarterly: '₹2,99,999', halfYearly: '₹4,99,999', risk: 'Very High', duration: 'Intraday / Positional', recommendations: '2–4 Calls', serviceType: 'Dedicated Relationship Manager' },
      ]
    }
  ];

  activeTierLabel(): string {
    return this.tiers.find(t => t.id === this.activeTier())?.label ?? '';
  }

  setTier(id: string): void {
    this.activeTier.set(id);
  }

  openModal(row: PricingRow): void {
    this.modalService.set(row);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalService.set(null);
    document.body.style.overflow = '';
  }
}
