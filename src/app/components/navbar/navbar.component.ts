import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteDataService } from '../../services/site-data.service';
import { NavItem } from '../../models/site.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav>
      <a class="logo" routerLink="/">Market<span>Edge</span></a>

      <ul class="nav-links">
        @for (item of navItems; track item.label) {
          <li [class.has-dropdown]="item.children?.length">
            @if (item.children?.length) {
              <a href="#">{{ item.label }} ▾</a>
              <div class="dropdown">
                @for (child of item.children; track child.label) {
                  <a [routerLink]="child.link">{{ child.label }}</a>
                }
              </div>
            } @else {
              <a [routerLink]="item.link">{{ item.label }}</a>
            }
          </li>
        }
        <li><a routerLink="/contact" class="nav-cta">Contact Us</a></li>
      </ul>

      <!-- Mobile menu toggle -->
      <button class="mobile-toggle" (click)="mobileOpen = !mobileOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <!-- Mobile menu -->
      @if (mobileOpen) {
        <div class="mobile-menu">
          @for (item of navItems; track item.label) {
            <a [href]="item.link ?? '#'" (click)="mobileOpen = false">{{ item.label }}</a>
          }
          <a href="/contact" class="mobile-cta" (click)="mobileOpen = false">Contact Us</a>
        </div>
      }
    </nav>
  `,
  styles: [`
    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(10, 12, 15, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }

    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 700;
      color: var(--white);
      letter-spacing: -0.02em;
      text-decoration: none;
      margin-right: auto;

      span { color: var(--gold); }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 12px;
      list-style: none;

      li {
        position: relative;

        &:hover .dropdown { display: block; }
      }

      a {
        color: var(--muted);
        text-decoration: none;
        font-size: 13.5px;
        font-weight: 500;
        padding: 8px 14px;
        border-radius: 6px;
        transition: color 0.2s, background 0.2s;
        display: block;

        &:hover {
          color: var(--white);
          background: rgba(255, 255, 255, 0.05);
        }
      }
    }

    .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 220px;
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 6px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      z-index: 200;

      a {
        font-size: 13px;
        padding: 8px 14px;
        color: var(--muted) !important;
        background: transparent !important;

        &:hover {
          color: var(--gold) !important;
          background: rgba(201, 168, 76, 0.08) !important;
        }
      }
    }

    .nav-cta {
      background: var(--gold) !important;
      color: var(--dark) !important;
      font-weight: 600 !important;
      padding: 9px 24px !important;
      border-radius: 8px !important;
      margin-left: 8px;

      &:hover {
        background: var(--gold-light) !important;
        color: var(--dark) !important;
      }
    }

    // Mobile
    .mobile-toggle {
      display: none !important;
      flex-direction: column;
      gap: 5px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 4px;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--white);
        border-radius: 2px;
      }
    }

    .mobile-menu {
      display: none;
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: var(--dark2);
      border-bottom: 1px solid var(--border);
      padding: 16px 20px;
      flex-direction: column;
      gap: 4px;
      z-index: 99;

      a {
        display: block;
        padding: 10px 14px;
        color: var(--muted);
        text-decoration: none;
        font-size: 14px;
        border-radius: 8px;

        &:hover { color: var(--white); background: rgba(255,255,255,0.05); }
      }

      .mobile-cta {
        margin-top: 8px;
        background: var(--gold);
        color: var(--dark) !important;
        font-weight: 600;
        text-align: center;
      }
    }

    @media (max-width: 900px) {
      nav { padding: 0 20px; }
      .nav-links { display: none; }
      .mobile-toggle { display: flex !important; }
      .mobile-menu { display: flex; }
    }

    @media (min-width: 901px) {
      .mobile-toggle { display: none !important; }
      .mobile-menu { display: none !important; }
    }
  `]
})
export class NavbarComponent {
  private siteData = inject(SiteDataService);
  navItems: NavItem[] = this.siteData.navItems;
  mobileOpen = false;
}
