import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="topbar">
      <span>⚠ Investments in securities market are subject to market risks. Read all related documents carefully before investing.</span>
      <div class="topbar-links">
        <a href="mailto:subscriber.edu@uncovermarkets.org">subscriber.edu&#64;uncovermarkets.org</a>
        <a href="tel:+917827384962">+91 7827 384 962</a>
      </div>
    </div>
  `,
  styles: [`
    .topbar {
      position: sticky;
      top: 0;
      background: var(--dark2);
      border-bottom: 1px solid var(--border);
      padding: 8px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--muted);
      letter-spacing: 0.03em;
    }

    .topbar-links {
      display: flex;
      gap: 20px;
    }

    a {
      color: var(--gold);
      text-decoration: none;
      &:hover { color: var(--gold-light); }
    }

    @media (max-width: 900px) {
      .topbar { display: none; }
    }
  `]
})
export class TopbarComponent {}
