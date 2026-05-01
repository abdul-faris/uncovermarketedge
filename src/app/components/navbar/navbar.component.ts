import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  NavigationEnd
} from '@angular/router';
import { filter } from 'rxjs/operators';

import { SiteDataService } from '../../services/site-data.service';
import { NavItem } from '../../models/site.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav>
      <a class="logo" routerLink="/">UncoverMarket<span>Edge</span></a>

      <ul class="nav-links">
        @for (item of navItems; track item.label) {
          <li [class.has-dropdown]="item.children?.length">
            @if (item.children?.length) {
              <a [routerLink]="item.link || null">{{ item.label }} ▾</a>

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

        <li>
          <a routerLink="/contact" class="nav-cta">Contact Us</a>
        </li>
      </ul>

      <!-- Mobile Toggle -->
      <button
        class="mobile-toggle"
        (click)="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile Menu -->
      @if (mobileOpen) {
        <div class="mobile-menu">
          @for (item of navItems; track item.label) {
            <a
              [routerLink]="item.link || null"
              (click)="mobileOpen = false"
            >
              {{ item.label }}
            </a>
          }

          <a
            routerLink="/contact"
            class="mobile-cta"
            (click)="mobileOpen = false"
          >
            Contact Us
          </a>
        </div>
      }
    </nav>
  `,
  styles: [`
    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      height: 70px;
      padding: 0 40px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background: rgba(10, 12, 15, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }

    .logo {
      text-decoration: none;
      color: var(--white);
      font-size: 28px;
      font-weight: 700;
      font-family: 'Playfair Display', serif;
      margin-right: auto;

      span {
        color: var(--gold);
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 12px;
      list-style: none;
    }

    .nav-links li {
      position: relative;
    }

    .nav-links li:hover .dropdown {
      display: block;
    }

    .nav-links a {
      display: block;
      text-decoration: none;
      color: var(--muted);
      font-size: 13.5px;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: 6px;
      transition: 0.2s;
    }

    .nav-links a:hover {
      color: var(--white);
      background: rgba(255,255,255,0.05);
    }

    .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 220px;
      padding: 6px;

      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 10px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      z-index: 200;
    }

    .dropdown a {
      font-size: 13px;
      color: var(--muted) !important;
      background: transparent !important;
      padding: 8px 14px;
    }

    .dropdown a:hover {
      color: var(--gold) !important;
      background: rgba(201,168,76,0.08) !important;
    }

    .nav-cta {
      background: var(--gold) !important;
      color: var(--dark) !important;
      font-weight: 600 !important;
      padding: 9px 24px !important;
      border-radius: 8px !important;
      margin-left: 8px;
    }

    .nav-cta:hover {
      background: var(--gold-light) !important;
    }

    /* Mobile */

    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      border: none;
      background: transparent;
      cursor: pointer;
    }

    .mobile-toggle span {
      width: 24px;
      height: 2px;
      background: var(--white);
      display: block;
    }

    .mobile-menu {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      z-index: 99;

      display: flex;
      flex-direction: column;
      gap: 6px;

      padding: 16px 20px;
      background: var(--dark2);
      border-bottom: 1px solid var(--border);
    }

    .mobile-menu a {
      text-decoration: none;
      color: var(--muted);
      padding: 10px 14px;
      border-radius: 8px;
    }

    .mobile-menu a:hover {
      color: var(--white);
      background: rgba(255,255,255,0.05);
    }

    .mobile-cta {
      margin-top: 8px;
      background: var(--gold);
      color: var(--dark) !important;
      text-align: center;
      font-weight: 600;
    }

    @media (max-width: 900px) {
      nav {
        padding: 0 20px;
      }

      .nav-links {
        display: none;
      }

      .mobile-toggle {
        display: flex;
      }
    }

    @media (min-width: 901px) {
      .mobile-menu {
        display: none !important;
      }
    }
  `]
})
export class NavbarComponent {
  private siteData = inject(SiteDataService);
  private router = inject(Router);

  navItems: NavItem[] = this.siteData.navItems;
  mobileOpen = false;

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        this.mobileOpen = false;
      });
  }
}