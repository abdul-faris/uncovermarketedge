import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SiteDataService } from '../../services/site-data.service';
import { Service } from '../../models/site.models';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TopbarComponent, NavbarComponent, FooterComponent],
  template: `
    <app-topbar />
    <app-navbar />

    <main class="service-page">

      @if (service()) {
        <!-- Breadcrumb Hero -->
        <section class="breadcrumb-hero">
          <div class="bh-bg"></div>
          <div class="bh-grid"></div>
          <div class="bh-inner">
            <div class="breadcrumb">
              <a routerLink="/">Home</a>
              <span class="sep">›</span>
              <span>{{ service()!.title }}</span>
            </div>
            <h1 class="fade-up">{{ service()!.title }}</h1>
          </div>
        </section>

        <!-- Main layout: content + sidebar -->
        <section class="service-body">
          <div class="service-inner">

            <!-- Main content -->
            <article class="service-content fade-up">
              <div class="content-header">
                <div class="service-icon-lg">{{ service()!.icon }}</div>
                <div class="eyebrow">{{ service()!.title }}</div>
              </div>

              <p class="intro-text">{{ service()!.fullDescription }}</p>

              <h3 class="features-heading">This service typically includes:</h3>

              <ul class="feature-list">
                @for (feature of service()!.features; track feature.title) {
                  <li class="feature-item">
                    <div class="feature-bullet">
                      <span class="bullet-dot"></span>
                    </div>
                    <div class="feature-body">
                      <strong>{{ feature.title }}:</strong>
                      <span> {{ feature.detail }}</span>
                    </div>
                  </li>
                }
              </ul>

              <div class="why-box">
                <p>{{ service()!.whyChoose }}</p>
              </div>

              <!-- Disclaimer -->
              <div class="disclaimer-strip">
                ⚠ Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
              </div>

              <!-- CTA row -->
              <div class="content-cta">
                <a routerLink="/contact" class="btn-primary">Enquire About This Service →</a>
                <a routerLink="/" fragment="services" class="btn-outline">View All Services</a>
              </div>
            </article>

            <!-- Sidebar -->
            <aside class="service-sidebar fade-up delay-1">

              <!-- Our Services list -->
              <div class="sidebar-card">
                <div class="sidebar-card-title">Our Services</div>
                <ul class="sidebar-service-list">
                  @for (s of allServices(); track s.slug) {
                    <li>
                      <a [routerLink]="s.link"
                         (click)="scrollToTop()"
                         [class.active]="s.slug === service()!.slug">
                        <span class="sidebar-icon">{{ s.icon }}</span>
                        <span>{{ s.title }}</span>
                        <span class="arrow">›</span>
                      </a>
                    </li>
                  }
                </ul>
              </div>

              <!-- Need Help card -->
              <div class="sidebar-card help-card">
                <div class="help-icon">📞</div>
                <div class="sidebar-card-title">Need Help?</div>
                <p class="help-text">Do you need assistance choosing the right plan? Please call us.</p>
                <a href="tel:+919999000001" class="help-phone">+91 9999 000 001</a>
                <a href="tel:+919999000002" class="help-phone">+91 9999 000 002</a>
                <a routerLink="/contact" class="btn-primary" style="margin-top: 20px; width: 100%; justify-content: center;">
                  Contact Us →
                </a>
              </div>

              <!-- SEBI badge -->
              <div class="sidebar-card sebi-sidebar">
                <div class="sidebar-card-title">SEBI Details</div>
                <div class="sebi-row-s"><strong>Reg. No.</strong><span>INH000000000</span></div>
                <div class="sebi-row-s"><strong>Type</strong><span>Research Analyst</span></div>
                <div class="sebi-row-s"><strong>BASL</strong><span>Member</span></div>
                <p class="sebi-note-s">
                  Registration granted by SEBI and membership of BASL and certification from NISM in no
                  way guarantee performance of the intermediary or provide any assurance of returns to investors.
                </p>
              </div>

            </aside>

          </div>
        </section>

        <!-- Related services strip -->
        <section class="related-services">
          <div class="related-inner">
            <div class="eyebrow" style="margin-bottom: 12px">Explore More</div>
            <h2 class="section-title" style="margin-bottom: 40px">Other <em>Services</em></h2>
            <div class="related-grid">
              @for (s of relatedServices(); track s.slug) {
                <div class="related-card" (click)="navigateToService(s.link)" role="button" tabindex="0" (keyup.enter)="navigateToService(s.link)">
                  <div class="related-icon">{{ s.icon }}</div>
                  <div class="related-title">{{ s.title }}</div>
                  <div class="related-desc">{{ s.description }}</div>
                  <span class="related-link">Learn more →</span>
                </div>
              }
            </div>
          </div>
        </section>

      } @else {
        <!-- 404 state -->
        <div class="not-found">
          <div class="nf-icon">🔍</div>
          <h2>Service Not Found</h2>
          <p>The service you're looking for doesn't exist.</p>
          <a routerLink="/" class="btn-primary" style="margin-top: 24px">Back to Home →</a>
        </div>
      }

    </main>

    <app-footer />
  `,
  styles: [`
    .service-page {
      background: var(--dark);
      min-height: 100vh;
    }

    /* ── Breadcrumb Hero ──────────────────────────────────────── */
    .breadcrumb-hero {
      position: relative;
      overflow: hidden;
      padding: 60px 40px 50px;
      background: var(--dark2);
      border-bottom: 1px solid var(--border);
    }

    .bh-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 100% at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 65%);
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
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--muted);
      margin-bottom: 20px;

      a {
        color: var(--gold);
        text-decoration: none;
        &:hover { color: var(--gold-light); }
      }

      .sep { color: var(--border); font-size: 16px; }
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(32px, 4vw, 56px);
      font-weight: 700;
      color: var(--white);
      line-height: 1.1;
    }

    /* ── Body Layout ──────────────────────────────────────────── */
    .service-body {
      padding: 60px 40px 80px;
    }

    .service-inner {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 48px;
      max-width: 1200px;
      margin: 0 auto;
      align-items: start;
    }

    /* ── Content ──────────────────────────────────────────────── */
    .service-content {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 16px;
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

    .content-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 28px;
    }

    .service-icon-lg {
      width: 60px; height: 60px;
      border-radius: 14px;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.25);
      display: flex; align-items: center; justify-content: center;
      font-size: 28px;
      flex-shrink: 0;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
    }

    .intro-text {
      font-size: 15.5px;
      color: var(--text);
      line-height: 1.8;
      margin-bottom: 36px;
    }

    .features-heading {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 24px;
    }

    .feature-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 36px;
    }

    .feature-item {
      display: flex;
      gap: 14px;
      align-items: flex-start;
      padding: 16px 20px;
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 10px;
      transition: border-color 0.2s;

      &:hover { border-color: rgba(201,168,76,0.3); }
    }

    .feature-bullet {
      padding-top: 6px;
      flex-shrink: 0;
    }

    .bullet-dot {
      display: block;
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--gold);
    }

    .feature-body {
      font-size: 14px;
      line-height: 1.65;
      color: var(--muted);

      strong { color: var(--white); font-weight: 600; }
    }

    .why-box {
      background: rgba(201,168,76,0.05);
      border: 1px solid var(--border);
      border-left: 3px solid var(--gold);
      border-radius: 0 10px 10px 0;
      padding: 20px 24px;
      margin-bottom: 28px;

      p { font-size: 14px; color: var(--muted); line-height: 1.75; }
    }

    .disclaimer-strip {
      background: rgba(239,68,68,0.06);
      border: 1px solid rgba(239,68,68,0.15);
      border-radius: 8px;
      padding: 14px 18px;
      font-size: 12.5px;
      color: #f87171;
      margin-bottom: 32px;
      line-height: 1.6;
    }

    .content-cta {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    /* ── Sidebar ──────────────────────────────────────────────── */
    .service-sidebar {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: sticky;
      top: 90px;
    }

    .sidebar-card {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
    }

    .sidebar-card-title {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--gold);
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }

    .sidebar-service-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;

      li a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border-radius: 8px;
        text-decoration: none;
        font-size: 13.5px;
        color: var(--muted);
        transition: all 0.2s;

        &:hover {
          background: rgba(201,168,76,0.08);
          color: var(--white);

          .arrow { color: var(--gold); }
        }

        &.active {
          background: rgba(201,168,76,0.1);
          color: var(--gold);
          border: 1px solid rgba(201,168,76,0.25);

          .arrow { color: var(--gold); }
        }
      }

      .sidebar-icon { font-size: 16px; flex-shrink: 0; }

      .arrow {
        margin-left: auto;
        color: var(--border);
        font-size: 16px;
        transition: color 0.2s;
      }
    }

    .help-card {
      text-align: center;
      background: linear-gradient(135deg, var(--dark2), rgba(201,168,76,0.04));
      border-color: rgba(201,168,76,0.2);
    }

    .help-icon { font-size: 36px; margin-bottom: 12px; }

    .help-text {
      font-size: 13px;
      color: var(--muted);
      line-height: 1.6;
      margin-bottom: 14px;
    }

    .help-phone {
      display: block;
      font-size: 17px;
      font-weight: 700;
      color: var(--gold);
      text-decoration: none;
      letter-spacing: 0.02em;
      margin-bottom: 6px;
      font-family: 'Playfair Display', serif;

      &:hover { color: var(--gold-light); }
    }

    .sebi-sidebar { font-size: 13px; }

    .sebi-row-s {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);

      &:last-of-type { border: none; }

      strong { color: var(--muted); font-weight: 500; }
      span { color: var(--gold); font-weight: 600; }
    }

    .sebi-note-s {
      margin-top: 12px;
      font-size: 11px;
      color: var(--muted);
      line-height: 1.6;
    }

    /* ── Related Services ─────────────────────────────────────── */
    .related-services {
      background: var(--dark2);
      border-top: 1px solid var(--border);
      padding: 80px 40px;
    }

    .related-inner { max-width: 1200px; margin: 0 auto; }

    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 18px;
    }

    .related-card {
      display: flex;
      flex-direction: column;
      background: var(--dark3);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px;
      text-decoration: none;
      transition: all 0.25s;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover {
        border-color: rgba(201,168,76,0.4);
        transform: translateY(-3px);
        box-shadow: 0 16px 40px rgba(0,0,0,0.3);

        &::after { opacity: 1; }
      }
    }

    .related-icon {
      font-size: 28px;
      margin-bottom: 14px;
    }

    .related-title {
      font-family: 'Playfair Display', serif;
      font-size: 16px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 8px;
      line-height: 1.3;
    }

    .related-desc {
      font-size: 13px;
      color: var(--muted);
      line-height: 1.6;
      flex: 1;
    }

    .related-link {
      display: inline-block;
      margin-top: 16px;
      font-size: 13px;
      color: var(--gold);
      font-weight: 500;
    }

    /* ── 404 ───────────────────────────────────────────────────── */
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 120px 40px;
      text-align: center;

      .nf-icon { font-size: 64px; margin-bottom: 24px; }
      h2 { font-family: 'Playfair Display', serif; font-size: 36px; color: var(--white); margin-bottom: 12px; }
      p { color: var(--muted); font-size: 16px; }
    }

    /* ── Animations ───────────────────────────────────────────── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { opacity: 0; animation: fadeUp 0.6s ease forwards; }
    .delay-1 { animation-delay: 0.15s; }

    // ── Responsive ─────────────────────────────────────────────
    @media (max-width: 1024px) {
      .service-inner { grid-template-columns: 1fr; }
      .service-sidebar { position: static; }
    }

    @media (max-width: 700px) {
      .breadcrumb-hero { padding: 50px 20px 40px; }
      .service-body { padding: 40px 20px 60px; }
      .service-content { padding: 28px 20px; }
      .related-services { padding: 60px 20px; }
      .content-cta { flex-direction: column; }
    }
  `]
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private siteData = inject(SiteDataService);

  service = signal<Service | undefined>(undefined);
  allServices = signal<Service[]>(this.siteData.services);
  relatedServices = signal<Service[]>([]);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      const found = this.siteData.getServiceBySlug(slug);
      this.service.set(found);

      if (found) {
        // pick 3 related services (excluding current)
        const others = this.siteData.services.filter(s => s.slug !== slug);
        this.relatedServices.set(others.slice(0, 3));
      }
    });
  }

  navigateToService(link: string) {
    window.scrollTo(0, 0);
    this.router.navigateByUrl(link);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
