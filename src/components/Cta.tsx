import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type CtaProps = {
  to: string;
  children: ReactNode;
  /** Optional glyph rendered before the animated carat (e.g. the ✈ on the home page). */
  glyph?: ReactNode;
};

/** Internal call-to-action link styled as the site's `a.cta` with an animated carat. */
export default function Cta({ to, children, glyph }: CtaProps) {
  return (
    <Link to={to} className="cta">
      {children} <span>{glyph}</span>{' '}
    </Link>
  );
}
