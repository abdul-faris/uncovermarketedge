import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-mentorship',
  standalone: true,
  imports: [CommonModule, RouterLink, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />
    <main class="mentorship-page">
      <section class="hero-section">
        <div class="hero-content">
          <div class="eyebrow">Premium Offering</div>
          <h1>Mentorship Program</h1>
          <p class="hero-subtitle">
            Master the markets with personalized, one-on-one guidance from our expert analysts. Elevate your trading skills and build lasting wealth.
          </p>
          <a routerLink="/contact" class="cta-button primary">Join the Program</a>
        </div>
      </section>

      <section class="features-section">
        <div class="container fade-up">
          <div class="section-header text-center">
            <h2>Why Choose Our Mentorship?</h2>
            <p>Our program is designed to transform novices into disciplined traders through structured learning and live market application.</p>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="icon">🧑‍🏫</div>
              <h3>1-on-1 Guidance</h3>
              <p>Get personalized attention from experienced market veterans who tailor the curriculum to your specific goals and risk appetite.</p>
            </div>
            <div class="feature-card">
              <div class="icon">📈</div>
              <h3>Live Market Trading</h3>
              <p>Learn to identify setups, execute trades, and manage risk in real-time during live market hours alongside your mentor.</p>
            </div>
            <div class="feature-card">
              <div class="icon">🧠</div>
              <h3>Advanced Strategies</h3>
              <p>Master price action, advanced technical indicators, options Greeks, and institutional trading concepts.</p>
            </div>
            <div class="feature-card">
              <div class="icon">🛡️</div>
              <h3>Risk Management</h3>
              <p>Learn the psychological discipline and strict risk management frameworks used by professional traders to protect capital.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="curriculum-section">
        <div class="container">
          <div class="curriculum-content fade-up">
            <h2>Program Curriculum</h2>
            <div class="module">
              <div class="module-number">01</div>
              <div class="module-text">
                <h3>Foundation & Market Mechanics</h3>
                <p>Understanding market structure, order flow, liquidity, and basic technical analysis.</p>
              </div>
            </div>
            <div class="module">
              <div class="module-number">02</div>
              <div class="module-text">
                <h3>Advanced Technicals & Price Action</h3>
                <p>Deep dive into chart patterns, multi-timeframe analysis, and high-probability trade setups.</p>
              </div>
            </div>
            <div class="module">
              <div class="module-number">03</div>
              <div class="module-text">
                <h3>Derivatives & Options Trading</h3>
                <p>Comprehensive guide to futures, options pricing, Greeks, and advanced option selling strategies.</p>
              </div>
            </div>
            <div class="module">
              <div class="module-number">04</div>
              <div class="module-text">
                <h3>Trading Psychology & Execution</h3>
                <p>Developing a trading plan, managing emotions, journaling, and building a professional mindset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section text-center">
        <div class="container fade-up">
          <h2>Ready to Transform Your Trading?</h2>
          <p>Enrollment is limited to ensure personalized attention. Apply now to secure your spot.</p>
          <a routerLink="/contact" class="cta-button primary">Apply Now</a>
        </div>
      </section>
    </main>
    <app-footer />
  `,
  styles: [`
    .mentorship-page { background: var(--dark); color: var(--white); min-height: 100vh; }
    
    .hero-section {
      padding: 160px 20px 100px;
      text-align: center;
      background: linear-gradient(to bottom, rgba(10, 12, 15, 0.9), var(--dark)), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop') center/cover;
      position: relative;
    }
    .hero-section::before {
      content: ''; position: absolute; inset: 0; background: rgba(10, 12, 15, 0.85); z-index: 1;
    }
    .hero-content {
      position: relative; z-index: 2; max-width: 800px; margin: 0 auto;
    }
    .eyebrow { font-size: 14px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 24px; }
    .hero-section h1 { font-family: 'Playfair Display', serif; font-size: 56px; margin-bottom: 24px; line-height: 1.1; }
    .hero-subtitle { font-size: 18px; color: var(--muted); margin-bottom: 40px; line-height: 1.6; }
    
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .text-center { text-align: center; }
    
    .features-section { padding: 100px 0; background: var(--dark2); }
    .section-header { margin-bottom: 64px; max-width: 700px; margin-inline: auto; }
    .section-header h2 { font-family: 'Playfair Display', serif; font-size: 36px; margin-bottom: 16px; }
    .section-header p { color: var(--muted); font-size: 16px; line-height: 1.6; }
    
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px; }
    .feature-card { background: var(--dark); padding: 40px 32px; border: 1px solid var(--border); border-radius: 16px; transition: 0.3s; }
    .feature-card:hover { border-color: var(--gold); transform: translateY(-5px); }
    .feature-card .icon { font-size: 40px; margin-bottom: 24px; }
    .feature-card h3 { font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 16px; color: var(--gold); }
    .feature-card p { color: var(--muted); font-size: 15px; line-height: 1.6; }
    
    .curriculum-section { padding: 100px 0; }
    .curriculum-content { max-width: 800px; margin: 0 auto; }
    .curriculum-content h2 { font-family: 'Playfair Display', serif; font-size: 36px; margin-bottom: 48px; text-align: center; }
    .module { display: flex; gap: 32px; margin-bottom: 32px; background: var(--dark2); padding: 32px; border-radius: 16px; border: 1px solid var(--border); }
    .module-number { font-family: 'Playfair Display', serif; font-size: 48px; color: var(--gold); opacity: 0.5; font-weight: 700; line-height: 1; }
    .module-text h3 { font-size: 20px; margin-bottom: 12px; color: var(--white); }
    .module-text p { color: var(--muted); font-size: 15px; line-height: 1.6; margin: 0; }
    
    .cta-section { padding: 100px 0; background: var(--dark2); border-top: 1px solid var(--border); }
    .cta-section h2 { font-family: 'Playfair Display', serif; font-size: 36px; margin-bottom: 16px; }
    .cta-section p { color: var(--muted); font-size: 18px; margin-bottom: 40px; }
    
    .cta-button { display: inline-block; padding: 16px 32px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: 0.3s; }
    .cta-button.primary { background: var(--gold); color: var(--dark); }
    .cta-button.primary:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 10px 20px rgba(201,168,76,0.2); }
    
    .fade-up { opacity: 0; animation: fadeUp 0.8s ease forwards; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    
    @media (max-width: 768px) {
      .hero-section h1 { font-size: 40px; }
      .module { flex-direction: column; gap: 16px; text-align: center; }
    }
  `]
})
export class MentorshipComponent { }
