import CaseStudy from '../components/CaseStudy';
import CellImage from '../components/CellImage';
import Cta from '../components/Cta';

export default function UnityARCompanion() {
  return (
    <CaseStudy>
      <div className="text">
        <h1>Unity AR Companion</h1>
        <p>
          The AR Companion app lets user capture environment data and author AR content
          that can be ingested into the Unity game engine.
        </p>
      </div>
      <div className="grid single">
        <div className="cell">
          <CellImage src="/img/MCA-header.png" style={{ border: 0 }} />
          <div className="mca-iphone">
            <CellImage src="/img/MCA-iphone.png" style={{ border: 0 }} />
          </div>
        </div>
      </div>
      <div className="text">
        <p>
          I redesigned the release version of the app, giving it a complete facelift,
          implementing new features and workflows, and working with Apple to integrate
          their then-unannounced Object Capture API ahead of WWDC.
        </p>
      </div>
      <div className="grid">
        <div className="cell">
          <CellImage src="/img/MCA-splashscreen.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/arca1.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/arca2.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/splash4.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/arca3.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/arca4.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/arca5.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/splash5.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/arca6.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/MCA-inspector.png" />
        </div>
      </div>
      <div className="bottom-block links">
        <Cta to="/work/avatour">Next</Cta>
      </div>
    </CaseStudy>
  );
}
