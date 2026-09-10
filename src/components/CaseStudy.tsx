import type { ReactNode } from 'react';
import PortfolioNav from './PortfolioNav';

export default function CaseStudy({ children }: { children: ReactNode }) {
  return (
    <div className="portfolio">
      <PortfolioNav />
      <div className="case-study">{children}</div>
    </div>
  );
}
