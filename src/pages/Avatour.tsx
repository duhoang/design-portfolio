import CaseStudy from '../components/CaseStudy';
import CellImage from '../components/CellImage';
import Cta from '../components/Cta';

export default function Avatour() {
  return (
    <CaseStudy>
      <div className="text">
        <h1>Avatour</h1>
        <p>
          Avatour is a live-streaming 360° video and VR telepresence startup pioneering
          remote inspections for the manufacturing and pharmaceutical industries.
        </p>
      </div>
      <div className="grid triple-one">
        <div className="cell">
          <CellImage src="/img/imeve-ux-b.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/imeve-ux-c.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/imeve-ux-a.png" />
        </div>
      </div>
      <div className="text">
        <p>
          I work with the founders to identify use cases, conceive the product, and design
          and build a suite of VR, mobile and desktop apps that are integrated with a
          live-streaming 360° camera.
        </p>

        <p>
          We had to invent novel design patterns to facilitate collaboration between
          on-camera subjects and their VR and desktop counterparts.
        </p>

        <p>The MVP we made together went on to raise $2.9 million.</p>
      </div>
      <div className="grid double">
        <div className="cell">
          <CellImage src="/img/avatour-1b.png" />
        </div>
        <div className="cell" style={{ display: 'flex', alignItems: 'center' }}>
          <CellImage src="/img/avatour-photo.jpg" />
        </div>
        <div className="cell">
          <CellImage src="/img/avatour-1a.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/avatour-1c.png" />
        </div>
      </div>
      <div className="bottom-block links">
        <Cta to="/work/copilot">Next</Cta>
      </div>
    </CaseStudy>
  );
}
