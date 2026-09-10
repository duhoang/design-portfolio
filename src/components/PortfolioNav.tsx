import { Link } from 'react-router-dom';

export default function PortfolioNav() {
  return (
    <div className="page-nav">
      <span />
      <div className="avatar">
        <Link to="/">
          <img src="/img/me-2021.png" alt="Du Hoang" />
        </Link>
      </div>
    </div>
  );
}
