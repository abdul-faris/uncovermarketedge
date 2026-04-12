export interface NavItem {
  label: string;
  link?: string;
  children?: NavItem[];
}

export interface ServiceFeature {
  title: string;
  detail: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
  slug?: string;
  fullDescription?: string;
  features?: ServiceFeature[];
  whyChoose?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
