import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />

    <main class="about-page">
      <section class="about-hero">
        <div class="hero-inner">
          <div>
            <div class="eyebrow fade-up">ABOUT US</div>
            <h1 class="fade-up delay-1">
              About <span>MarketEdge</span><br>Research
            </h1>
            <p class="hero-description fade-up delay-2">
              A market research and analysis company specialising in gathering and interpreting data about markets, 
              consumers, competitors, and industry trends — helping businesses and investors make informed decisions.
            </p>
            <p class="hero-sub fade-up delay-3">
              We play a crucial role in providing insights into market dynamics, customer preferences, and strategic opportunities.
            </p>
          </div>

          <div class="core-strengths fade-up delay-2">
            <div class="strengths-title">OUR CORE STRENGTHS</div>
            <div class="strengths-list">
              <div class="strength-item">
                <span class="strength-dot"></span>
                <span class="strength-text">Expertise & Decade-Long Track Record</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot"></span>
                <span class="strength-text">Comprehensive, Multi-Asset Coverage</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot"></span>
                <span class="strength-text">Customisation & Flexibility</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot"></span>
                <span class="strength-text">Technology-Driven Innovation</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot"></span>
                <span class="strength-text">Documented Client Success</span>
              </div>
              <div class="strength-item">
                <span class="strength-dot"></span>
                <span class="strength-text">Clear Value Proposition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Disclaimer Section -->
      <section class="disclaimer-section">
        <div class="disclaimer-inner">
          <div class="disclaimer-box">
            <p>
              <strong>MarketEdge Research</strong> provides investment research and advisory services. The information 
              and recommendations are based on reliable sources and thorough analysis. Investments involve risk, and 
              past performance is not indicative of future results. Clients are advised to consult with financial 
              advisors before making investment decisions.
            </p>
          </div>

          <div class="sebi-badge">
            <strong>SEBI Reg:</strong> INH000000000 &nbsp;|&nbsp; BASL Member
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="why-choose-us">
        <div class="why-inner">
          <div class="why-header">
            <div class="eyebrow">Why MarketEdge</div>
            <h2>Why Choose <span>MarketEdge</span></h2>
          </div>

          <div class="why-grid">
            <div class="why-card">
              <div class="why-icon">📊</div>
              <h3>Research Excellence</h3>
              <p>Comprehensive market analysis backed by years of expertise and proven track record in delivering results.</p>
            </div>

            <div class="why-card">
              <div class="why-icon">🎯</div>
              <h3>Tailored Solutions</h3>
              <p>Customised research and advisory services designed to meet your specific investment goals and risk profile.</p>
            </div>

            <div class="why-card">
              <div class="why-icon">💡</div>
              <h3>Innovation First</h3>
              <p>Technology-driven approach combining AI-assisted analysis with expert insights for superior market intelligence.</p>
            </div>

            <div class="why-card">
              <div class="why-icon">✓</div>
              <h3>Transparency</h3>
              <p>Clear communication, documented results, and open disclosure of methodologies and performance metrics.</p>
            </div>

            <div class="why-card">
              <div class="why-icon">👥</div>
              <h3>Client Success</h3>
              <p>Dedicated support team and proven track record of helping clients achieve their investment objectives.</p>
            </div>

            <div class="why-card">
              <div class="why-icon">🔒</div>
              <h3>Regulatory Compliance</h3>
              <p>SEBI-registered research analyst with strict compliance to regulatory standards and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="about-cta">
        <div class="cta-inner">
          <h2>Ready to Start Your Investment Journey?</h2>
          <p>Explore our subscription plans and find the right fit for your trading and investment needs.</p>
          <div class="cta-buttons">
            <a routerLink="/pricing" class="btn-primary">View Pricing →</a>
            <a routerLink="/contact" class="btn-outline">Get In Touch</a>
          </div>
        </div>
      </section>

    </main>

    <app-footer />
  `,
  styles: [`
    .about-page {
      background: var(--dark);
      min-height: 100vh;
    }

    /* Hero Section */
    .about-hero {
      position: relative;
      overflow: hidden;
      padding: 80px 40px 60px;
      background: var(--dark);
      border-bottom: 1px solid var(--border);
    }

    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 60px;
      align-items: start;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 16px;
      display: block;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(42px, 5vw, 72px);
      font-weight: 700;
      color: var(--white);
      line-height: 1.08;
      margin-bottom: 24px;

      span {
        color: var(--gold);
        font-style: italic;
      }
    }

    .hero-description {
      font-size: 16px;
      color: var(--muted);
      line-height: 1.75;
      margin-bottom: 18px;
    }

    .hero-sub {
      font-size: 15px;
      color: var(--muted);
      line-height: 1.7;
    }

    .core-strengths {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px 28px;
      position: sticky;
      top: 90px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
        border-radius: 16px 16px 0 0;
      }
    }

    .strengths-title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border);
    }

    .strengths-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .strength-item {
      display: flex;
      align-items: center;
      gap: 14px;
      font-size: 14px;
      color: var(--text);
      line-height: 1.5;
      background: rgba(201, 168, 76, 0.05);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 18px;
      transition: all 0.2s;

      &:hover {
        border-color: rgba(201, 168, 76, 0.3);
        background: rgba(201, 168, 76, 0.08);
      }
    }

    .strength-dot {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--gold);
      flex-shrink: 0;
    }

    /* Disclaimer Section */
    .disclaimer-section {
      padding: 60px 40px;
      background: var(--dark);
    }

    .disclaimer-inner {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
    }

    .disclaimer-box {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-left: 3px solid var(--gold);
      border-radius: 0 12px 12px 0;
      padding: 32px 28px;
      width: 100%;
    }

    .disclaimer-box p {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.8;

      strong {
        color: var(--white);
      }
    }

    .sebi-badge {
      font-size: 13px;
      color: var(--muted);
      margin-top: 24px;
      padding: 12px 16px;
      background: rgba(201, 168, 76, 0.05);
      border: 1px solid var(--border);
      border-radius: 8px;
      line-height: 1.6;

      strong {
        color: var(--gold);
        font-weight: 600;
      }
    }

    .badge-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .badge-value {
      font-size: 14px;
      font-weight: 600;
      color: var(--gold);
      font-family: 'Courier New', monospace;
    }

    .badge-separator {
      color: var(--border);
    }

    .badge-member {
      font-size: 12px;
      font-weight: 600;
      color: var(--white);
    }

    /* Why Choose Us Section */
    .why-choose-us {
      padding: 80px 40px;
      background: var(--dark2);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .why-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .why-header {
      margin-bottom: 60px;
      text-align: center;
    }

    .why-header h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(36px, 4vw, 56px);
      font-weight: 700;
      color: var(--white);
      line-height: 1.1;
      margin-top: 12px;

      span {
        color: var(--gold);
        font-style: italic;
      }
    }

    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 28px;
    }

    .why-card {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 32px 28px;
      text-align: center;
      transition: all 0.25s;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }

      &:hover {
        border-color: rgba(201, 168, 76, 0.3);
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
      }
    }

    .why-icon {
      font-size: 36px;
      margin-bottom: 16px;
      display: block;
    }

    .why-card h3 {
      font-size: 16px;
      font-weight: 600;
      color: var(--white);
      margin-bottom: 12px;
    }

    .why-card p {
      font-size: 13.5px;
      color: var(--muted);
      line-height: 1.65;
    }

    /* CTA Section */
    .about-cta {
      padding: 80px 40px;
      background: var(--dark2);
      border-top: 1px solid var(--border);
    }

    .cta-inner {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }

    .cta-inner h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(28px, 3.5vw, 48px);
      font-weight: 700;
      color: var(--white);
      margin-bottom: 16px;
    }

    .cta-inner p {
      font-size: 15px;
      color: var(--muted);
      margin-bottom: 32px;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary,
    .btn-outline {
      padding: 12px 32px;
      border-radius: 10px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: var(--gold);
      color: var(--dark);

      &:hover {
        background: var(--gold-light);
        transform: translateY(-2px);
      }
    }

    .btn-outline {
      background: transparent;
      color: var(--gold);
      border: 1px solid var(--gold);

      &:hover {
        background: rgba(201, 168, 76, 0.1);
        border-color: var(--gold-light);
        color: var(--gold-light);
      }
    }

    /* Animations */
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fade-up {
      opacity: 0;
      animation: fadeUp 0.6s ease forwards;
    }

    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.3s; }
    .delay-3 { animation-delay: 0.45s; }

    /* Responsive */
    @media (max-width: 900px) {
      .about-hero {
        padding: 60px 20px 40px;
      }

      .hero-inner {
        grid-template-columns: 1fr;
        gap: 32px;
      }

      .core-strengths {
        position: relative;
        top: auto;
        width: 100%;
      }

      .disclaimer-inner {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .why-choose-us {
        padding: 60px 20px;
      }

      .about-cta {
        padding: 60px 20px;
      }

      .cta-buttons {
        gap: 12px;
      }

      .btn-primary,
      .btn-outline {
        flex: 1;
        min-width: 160px;
      }
    }
  `]
})
export class AboutComponent {}
