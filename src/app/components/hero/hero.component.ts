import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../services/site-data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  template: `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid"></div>

      <div class="hero-eyebrow fade-up">Market Research &amp; Advisory</div>

      <h1 class="fade-up delay-1">
        Applying <em>Intelligent</em><br>
        Market Research<br>
        Solutions
      </h1>

      <p class="hero-sub fade-up delay-2">
        Extraordinary results don't require extraordinary complexity.
        They require the right intelligence, delivered with precision.
      </p>

      <div class="hero-actions fade-up delay-3">
        <a routerLink="/contact" (click)="navigateTo('/contact')" class="btn-primary">Get Started →</a>
        <a href="#services" class="btn-outline">Explore Services</a>
      </div>

    </section>
  `,
  styles: [`
    .hero {
      min-height: 92vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 80px 40px;
      position: relative;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201, 168, 76, 0.07) 0%, transparent 70%),
        radial-gradient(ellipse 50% 80% at 90% 80%, rgba(201, 168, 76, 0.04) 0%, transparent 60%);
    }

    .hero-grid {
      position: absolute;
      inset: 0;
      opacity: 0.04;
      background-image:
        linear-gradient(rgba(201, 168, 76, 1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(201, 168, 76, 1) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .hero-eyebrow {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;

      &::before {
        content: '';
        display: block;
        width: 32px;
        height: 1px;
        background: var(--gold);
      }
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(44px, 6vw, 88px);
      line-height: 1.05;
      font-weight: 700;
      color: var(--white);
      max-width: 800px;
      position: relative;

      em {
        font-style: italic;
        color: var(--gold);
      }
    }

    .hero-sub {
      margin-top: 28px;
      font-size: 17px;
      color: var(--muted);
      max-width: 480px;
      line-height: 1.7;
      position: relative;
    }

    .hero-actions {
      margin-top: 44px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      position: relative;
    }

    .hero-stats {
      margin-top: 72px;
      display: flex;
      gap: 48px;
      flex-wrap: wrap;
      position: relative;
      padding-top: 40px;
      border-top: 1px solid var(--border);
    }

    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 38px;
      font-weight: 700;
      color: var(--white);
      line-height: 1;
    }

    .stat-label {
      font-size: 12px;
      color: var(--muted);
      margin-top: 6px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      .hero {
        padding: 60px 20px;
        min-height: auto;
        padding-top: 100px;
      }
      .hero-stats { gap: 32px; }
    }
  `]
})
export class HeroComponent {
  private siteData = inject(SiteDataService);
  private router =inject(Router);
  navigateTo(link: string) {
    this.router.navigateByUrl(link).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  }
}
