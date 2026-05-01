import { Injectable } from '@angular/core';
import { NavItem, Service, Stat, WhyItem, FooterSection } from '../models/site.models';

@Injectable({ providedIn: 'root' })
export class SiteDataService {

  navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    {
      label: 'Services',
      link: '/services/stock-cash',
      children: [
        { label: 'Stock Cash Subscription', link: '/services/stock-cash' },
        { label: 'Stock / Index Futures', link: '/services/futures' },
        { label: 'Stock / Index Options', link: '/services/options' },
        { label: 'Commodity (MCX/NCDEX)', link: '/services/commodity' },
        { label: 'Bullions Subscription', link: '/services/bullions' },
        { label: 'Base Metals Subscription', link: '/services/base-metals' },
        { label: 'Energy Subscription', link: '/services/energy' },
        { label: 'HNI Subscription', link: '/services/hni' },
      ]
    },
    {
      label: 'Pricing',
      link: '/pricing/regular',
      children: [
        { label: 'Regular', link: '/pricing/regular' },
        { label: 'Premium', link: '/pricing/premium' },
        { label: 'Ultra Premium', link: '/pricing/ultra-premium' },
        { label: 'Mentorship Program', link: '/pricing/mentorship' },
      ]
    },
    { label: 'Bank Details', link: '/bank-details' },
    { label: 'Consent Form', link: '/consent' },
  ];


  services: Service[] = [
    {
      icon: '📈',
      title: 'Stock Cash Subscription',
      description: 'Expert guidance and recommendations for trading in the cash segment of the stock market with risk-managed strategies.',
      link: '/services/stock-cash',
      slug: 'stock-cash',
      fullDescription: 'Stock cash subscription services provide expert guidance and recommendations for trading in the cash segment of the stock market. These services are designed for investors who want to participate directly in equity markets with professional support.',
      features: [
        { title: 'Stock Selection', detail: 'Analysing stocks based on fundamental and technical analysis to identify high-probability investment opportunities.' },
        { title: 'Investment Advice', detail: 'Providing clear recommendations on when to buy, sell, or hold stocks based on market trends and company performance.' },
        { title: 'Risk Management', detail: 'Advising on risk mitigation strategies, portfolio diversification, and optimal allocation of funds among different stocks.' },
        { title: 'Market Insights', detail: 'Offering in-depth insights into market trends, macroeconomic factors, and sector-specific analysis.' },
        { title: 'Portfolio Management', detail: 'Managing investment portfolios to align with risk tolerance and long-term financial goals.' },
        { title: 'Customised Strategies', detail: 'Tailoring strategies based on individual client needs — short-term gains, long-term growth, or income generation.' },
        { title: 'Regular Updates', detail: 'Providing timely updates, market commentaries, and periodic performance reviews of recommended stocks.' },
        { title: 'Educational Resources', detail: 'Offering educational materials and guidance to help clients understand market dynamics and make informed decisions.' },
      ],
      whyChoose: 'When considering a stock cash subscription service, it\'s essential to evaluate their track record, reputation, transparency, and fee structure. Many investors find such services beneficial, especially those who lack the time or expertise to conduct thorough research on individual stocks.'
    },
    {
      icon: '📊',
      title: 'Stock / Index Futures',
      description: 'Specialised advice and recommendations for trading in futures contracts on stocks and indices with precision timing.',
      link: '/services/futures',
      slug: 'futures',
      fullDescription: 'Stock and index future subscription services offer specialised advice and recommendations for trading in futures contracts on stocks and indices. Futures trading can amplify returns but also carries higher risk, making expert guidance essential.',
      features: [
        { title: 'Futures Strategy', detail: 'Crafting targeted strategies for trading stock and index futures, including intraday and positional calls.' },
        { title: 'Entry & Exit Levels', detail: 'Providing precise entry, exit, and stop-loss levels for each futures trade to manage downside risk effectively.' },
        { title: 'Index Analysis', detail: 'In-depth analysis of Nifty, Bank Nifty, and other major index futures to capitalise on broad market movements.' },
        { title: 'Leverage Management', detail: 'Guidance on appropriate use of leverage to maximise opportunities while keeping risk within acceptable limits.' },
        { title: 'Rollover Advisory', detail: 'Expert advice on contract rollovers at expiry, including timing and strategy adjustments.' },
        { title: 'Hedging Solutions', detail: 'Using futures contracts to hedge existing portfolio positions against adverse market movements.' },
        { title: 'Real-Time Alerts', detail: 'Timely SMS, email, and app alerts so you never miss a recommended trade during market hours.' },
        { title: 'Performance Tracking', detail: 'Monthly performance reports with detailed trade-by-trade analysis and portfolio returns.' },
      ],
      whyChoose: 'Futures trading demands a deep understanding of market mechanics, margin requirements, and risk management. Our subscription service equips both novice and experienced traders with the knowledge and real-time guidance needed to navigate futures markets confidently.'
    },
    {
      icon: '⚙️',
      title: 'Stock / Index Options',
      description: 'Expert recommendations for options contracts on stocks and indices, covering strategies from conservative to advanced.',
      link: '/services/options',
      slug: 'options',
      fullDescription: 'Stock and index option subscription services provide expert advice and recommendations for trading in options contracts. From simple directional bets to multi-leg strategies, our service covers the full spectrum of options trading.',
      features: [
        { title: 'Options Strategy Design', detail: 'Designing tailored options strategies — from simple calls/puts to spreads, straddles, and iron condors.' },
        { title: 'Greeks Analysis', detail: 'Detailed analysis of Delta, Gamma, Theta, and Vega to help you understand and manage options risk.' },
        { title: 'Weekly & Monthly Expiry', detail: 'Specific recommendations for both weekly Nifty/Bank Nifty expiry plays and monthly contract strategies.' },
        { title: 'Premium Collection', detail: 'Strategies focused on selling premium for consistent income in range-bound and low-volatility environments.' },
        { title: 'Volatility Trading', detail: 'Leveraging implied volatility analysis to time entries and exits for optimal options pricing.' },
        { title: 'Defined Risk Trades', detail: 'Spread strategies that cap maximum loss while preserving significant profit potential.' },
        { title: 'Adjustment Guidance', detail: 'Real-time guidance on adjusting or rolling positions when the market moves against expectations.' },
        { title: 'Educational Workshops', detail: 'Regular webinars and workshops to deepen your understanding of options mechanics and strategy.' },
      ],
      whyChoose: 'Options are one of the most versatile financial instruments available, but they require careful strategy and timing. Our expert team simplifies complex options concepts and delivers actionable recommendations suitable for all levels of traders.'
    },
    {
      icon: '🌾',
      title: 'Commodity (MCX / NCDEX)',
      description: 'Specialised advice for trading in commodity markets including agricultural and industrial commodities across exchanges.',
      link: '/services/commodity',
      slug: 'commodity',
      fullDescription: 'Commodity (MCX/NCDEX) subscription services specialise in providing advice and recommendations for trading in commodity markets. Our research covers the full range of commodities traded on India\'s leading exchanges.',
      features: [
        { title: 'MCX Trading Calls', detail: 'Precise intraday and positional trading recommendations for all major MCX-traded commodities.' },
        { title: 'NCDEX Advisory', detail: 'Agricultural commodity research and trading calls for NCDEX contracts including agri-futures.' },
        { title: 'Global Commodity Tracking', detail: 'Monitoring international commodity prices and their impact on domestic markets for informed decision-making.' },
        { title: 'Seasonal Analysis', detail: 'Understanding seasonal demand-supply cycles in agricultural commodities to time entries effectively.' },
        { title: 'Currency Impact Analysis', detail: 'Assessing how USD/INR and other currency movements affect commodity prices in India.' },
        { title: 'Supply & Demand Research', detail: 'Fundamental research on production, inventory, import/export data, and demand forecasts.' },
        { title: 'Risk & Margin Guidance', detail: 'Clear guidance on margin requirements, lot sizes, and risk per trade for commodity futures.' },
        { title: 'News & Event Alerts', detail: 'Timely alerts on policy changes, crop reports, OPEC decisions, and other market-moving events.' },
      ],
      whyChoose: 'Commodity markets are driven by a unique interplay of global and domestic factors. Our specialised research team tracks these dynamics closely and translates complex information into clear, actionable trading recommendations for our subscribers.'
    },
    {
      icon: '🪙',
      title: 'Bullions Subscription',
      description: 'Expert advice for trading precious metals like gold and silver, with clear entry, exit, and stop-loss recommendations.',
      link: '/services/bullions',
      slug: 'bullions',
      fullDescription: 'Bullions subscription services specialise in providing expert advice and recommendations for trading in precious metals markets, primarily gold and silver. Precious metals serve as both investment assets and safe-haven instruments.',
      features: [
        { title: 'Gold & Silver Calls', detail: 'Specific buy/sell recommendations for MCX Gold and Silver contracts with defined risk parameters.' },
        { title: 'International Price Tracking', detail: 'Monitoring COMEX gold and silver prices and their relationship to domestic MCX pricing.' },
        { title: 'Safe-Haven Analysis', detail: 'Analysing geopolitical events, central bank policies, and inflation data that drive precious metal prices.' },
        { title: 'Physical vs Futures Guidance', detail: 'Advisory on whether to invest in physical metals, ETFs, or futures contracts based on client goals.' },
        { title: 'Festival & Seasonal Demand', detail: 'Capitalising on predictable seasonal demand patterns in India\'s gold and silver markets.' },
        { title: 'Currency Correlation', detail: 'Understanding USD strength/weakness and its direct impact on bullion prices for better timing.' },
        { title: 'Portfolio Hedging', detail: 'Using gold and silver as portfolio hedges against equity market volatility and inflation.' },
        { title: 'Long-Term Investment View', detail: 'Macro-level analysis for investors looking to accumulate gold and silver as long-term wealth protection.' },
      ],
      whyChoose: 'Precious metals have been a store of value for centuries and continue to play a vital role in modern investment portfolios. Our bullions service provides the research depth and timely guidance needed to trade and invest in gold and silver confidently.'
    },
    {
      icon: '⚒️',
      title: 'Base Metals Subscription',
      description: 'Advisory for trading in non-precious industrial metals such as copper, aluminium, zinc, nickel, and lead.',
      link: '/services/base-metals',
      slug: 'base-metals',
      fullDescription: 'Base metals subscription services specialise in providing advice and recommendations for trading and investing in non-precious industrial metals. These commodities are critical to global industrial activity and offer significant trading opportunities.',
      features: [
        { title: 'Multi-Metal Coverage', detail: 'Research and trading calls across all major base metals: Copper, Aluminium, Zinc, Nickel, Lead, and Tin.' },
        { title: 'Industrial Demand Analysis', detail: 'Tracking global manufacturing, construction, and infrastructure spending to forecast metal demand.' },
        { title: 'China Market Intelligence', detail: 'Close monitoring of China\'s industrial activity, which is the world\'s largest consumer of base metals.' },
        { title: 'LME & MCX Correlation', detail: 'Analysing London Metal Exchange (LME) movements and their impact on MCX base metal prices.' },
        { title: 'Supply Chain Research', detail: 'Tracking mining output, smelter capacity, and inventory levels at major global warehouses.' },
        { title: 'Intraday & Positional Calls', detail: 'Both short-term intraday and medium-term positional recommendations for all covered metals.' },
        { title: 'Macro Economic Indicators', detail: 'Monitoring PMI data, infrastructure spending, and global trade metrics that influence metal prices.' },
        { title: 'Risk-Adjusted Recommendations', detail: 'All trade calls include clear stop-loss and target levels appropriate to base metal volatility.' },
      ],
      whyChoose: 'Base metals are highly sensitive to global economic cycles, making them both challenging and rewarding to trade. Our specialised research team provides the industrial and macroeconomic context needed to trade base metals with confidence.'
    },
    {
      icon: '⚡',
      title: 'Energy Subscription',
      description: 'Expert consulting and strategic solutions for trading in energy commodities including crude oil and natural gas.',
      link: '/services/energy',
      slug: 'energy',
      fullDescription: 'Energy subscription services specialise in providing expert advice and strategic solutions related to the energy sector. From crude oil to natural gas, our research covers the full energy complex with actionable trading guidance.',
      features: [
        { title: 'Crude Oil Advisory', detail: 'Comprehensive research and trading calls for MCX Crude Oil contracts based on global supply-demand dynamics.' },
        { title: 'Natural Gas Research', detail: 'Specialised analysis of natural gas markets, including seasonal demand patterns and weather impacts.' },
        { title: 'OPEC & Geopolitical Analysis', detail: 'Monitoring OPEC+ production decisions, geopolitical tensions, and their direct impact on energy prices.' },
        { title: 'US Inventory Data Tracking', detail: 'Weekly analysis of EIA crude oil and natural gas inventory reports for short-term price direction.' },
        { title: 'Refinery & Demand Trends', detail: 'Tracking global refinery runs, product crack spreads, and seasonal demand shifts in energy markets.' },
        { title: 'Renewable Energy Transition', detail: 'Advisory on how the global energy transition is reshaping long-term demand for traditional energy commodities.' },
        { title: 'Currency & Macro Correlation', detail: 'Understanding how USD movements, interest rates, and global growth affect energy commodity prices.' },
        { title: 'Timely Trade Alerts', detail: 'Real-time alerts before and after major energy market events, including EIA data releases and OPEC meetings.' },
      ],
      whyChoose: 'Energy markets are among the most dynamic and globally interconnected commodity markets. Our expert energy research team monitors global supply chains, geopolitical developments, and macroeconomic indicators around the clock to deliver timely, actionable guidance.'
    },
    {
      icon: '💼',
      title: 'HNI Subscription',
      description: 'Bespoke financial advisory catering to the unique needs and investment goals of High Net Worth Individuals.',
      link: '/services/hni',
      slug: 'hni',
      fullDescription: 'HNI subscription services cater to the unique financial needs and investment goals of High Net Worth Individuals (HNIs). This premium service offers a highly personalised approach to wealth management and market advisory.',
      features: [
        { title: 'Dedicated Relationship Manager', detail: 'A personal relationship manager as your single point of contact for all advisory and support needs.' },
        { title: 'Personalised Portfolio Strategy', detail: 'Fully customised investment strategies designed around your unique risk profile, goals, and time horizon.' },
        { title: 'Multi-Asset Advisory', detail: 'Comprehensive coverage across equities, derivatives, commodities, and fixed income for true portfolio diversification.' },
        { title: 'Priority Research Access', detail: 'First access to all research reports, market outlooks, and high-conviction trade ideas from our top analysts.' },
        { title: 'Exclusive Market Calls', detail: 'High-value trade recommendations with larger position sizes and tighter execution support for HNI portfolios.' },
        { title: 'Tax Efficiency Planning', detail: 'Guidance on structuring investments to minimise tax liability within the framework of applicable regulations.' },
        { title: 'Direct Analyst Access', detail: 'Scheduled calls and meetings with senior analysts to discuss market outlook, portfolio positioning, and queries.' },
        { title: 'Quarterly Portfolio Review', detail: 'Comprehensive quarterly reviews of portfolio performance, strategy effectiveness, and course corrections.' },
      ],
      whyChoose: 'High Net Worth Individuals have distinct financial needs that go beyond standard investment advisory. Our HNI service delivers the personalised attention, exclusive research, and bespoke strategies that sophisticated investors deserve.'
    },
  ];

  getServiceBySlug(slug: string): Service | undefined {
    return this.services.find(s => s.slug === slug);
  }

  aboutPillars: string[] = [
    'Expertise & Decade-Long Experience',
    'Comprehensive, Multi-Asset Services',
    'Customisation & Flexibility',
    'Technology-Driven Innovation',
    'Documented Client Success Stories',
    'Clear Value Proposition'
  ];

  whyItems: WhyItem[] = [
    { number: '01', title: 'Expertise & Experience', description: 'Years of experience across equity, commodity, and derivatives markets with a seasoned research team.' },
    { number: '02', title: 'Comprehensive Coverage', description: 'From cash equities to commodities, options to HNI portfolios — we cover all major investment avenues.' },
    { number: '03', title: 'Technology & Innovation', description: 'Data-driven research backed by proprietary analytical tools and real-time market intelligence systems.' },
    { number: '04', title: 'Transparency & Trust', description: 'SEBI-registered with full regulatory compliance, grievance mechanisms, and clear disclosure standards.' }
  ];

  whyStats: Stat[] = [
    { value: '5K+', label: 'Happy Clients' },
    { value: '2+', label: 'Years Active' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '8', label: 'Service Categories' },
  ];

  footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { label: 'Stock Cash', href: '/services/stock-cash' },
        { label: 'Index Futures', href: '/services/futures' },
        { label: 'Index Options', href: '/services/options' },
        { label: 'Commodity MCX', href: '/services/commodity' },
        { label: 'Bullions', href: '/services/bullions' },
        { label: 'Base Metals', href: '/services/base-metals' },
        { label: 'Energy', href: '/services/energy' },
        { label: 'HNI', href: '/services/hni' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Mentorship Program', href: '/mentorship' },
        { label: 'Bank Details', href: '/bank-details' },
        { label: 'Complaint Board', href: '/complaint-board' },
        { label: 'Investor Charter', href: '/investor-charter' },
        { label: 'Careers', href: '/careers' },
        { label: 'Consent Form', href: '/consent' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Refund Policy', href: '/refund' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Disclosure', href: '/disclosure' },
        { label: 'Grievance', href: '/grievance' },
      ]
    }
  ];
}
