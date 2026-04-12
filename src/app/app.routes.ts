import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BankDetailsComponent } from './pages/bank-details/bank-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'pricing/:tier', component: PricingComponent },
  { path: 'bank-details', component: BankDetailsComponent },
  { path: '**', redirectTo: '' }
];
