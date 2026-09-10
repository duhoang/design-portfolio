import CaseStudy from '../components/CaseStudy';
import CellImage from '../components/CellImage';
import Cta from '../components/Cta';

export default function MapD() {
  return (
    <CaseStudy>
      <div className="text">
        <h1>MapD</h1>
        <p>MapD is a GPU-powered database startup, funded by Google Ventures and Nvidia.</p>
      </div>
      <div className="grid double-single">
        <div className="cell">
          <CellImage className="bordered" src="/img/mapd-chart-editor.png" />
        </div>
        <div className="cell" style={{ display: 'flex', alignItems: 'center' }}>
          <CellImage className="bordered" src="/img/mapd-dashboard.png" />
        </div>
      </div>
      <div className="text">
        <p>
          I was the first design hire tasked with redesigning the prototype product for
          commercial release. The goal of the redesign for me was to create a beautiful
          interface that simplifies the complex task of configuring data-rich dashboards.
        </p>
      </div>
      <div className="grid single">
        <div className="cell" style={{ paddingBottom: '56%' }}>
          <iframe
            src="https://player.vimeo.com/video/144312724?loop=1&amp;title=0&amp;byline=0&amp;portrait=0"
            style={{ width: '100%', height: '100%' }}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
      <div className="bottom-block links">
        <Cta to="/">Next</Cta>
      </div>
    </CaseStudy>
  );
}
