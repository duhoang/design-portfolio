import CaseStudy from '../components/CaseStudy';
import CellImage from '../components/CellImage';
import Cta from '../components/Cta';

export default function UnityXR() {
  return (
    <CaseStudy>
      <div className="text">
        <h1>Unity XR</h1>
        <p>
          Unity is the most popular game engine for creating Virtual and Augmented Reality
          experiences.
        </p>
      </div>
      <div className="grid single">
        <div className="cell perspective">
          <CellImage src="/img/unity-splash.png" className="warped" />
        </div>
      </div>
      <div className="text">
        <p>
          My work as a Design Lead for the XR org encompasses everything from designing XR
          authoring and configuration workflows in the Unity Editor, to partnering with
          Meta, Google, and Apple and delivering XR features for their developer platforms.
        </p>
      </div>
      <div
        className="grid double-span"
        style={{ gridTemplateColumns: '0.718fr 0.282fr' }}
      >
        <div className="cell">
          <CellImage src="/img/mars-2.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/objectcapture.png" />
        </div>
      </div>
      <div
        className="grid triple-rand"
        style={{ gridTemplateColumns: '0.412fr 0.32fr 0.28fr', marginBottom: 8 }}
      >
        <div className="cell">
          <CellImage src="/img/meta-browser.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/meta-window.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/compresource.png" />
          <div style={{ marginTop: 8 }}>
            <CellImage src="/img/unity-sample.png" />
          </div>
        </div>
      </div>
      <div
        className="grid double-span"
        style={{ gridTemplateColumns: '0.522fr 0.5fr' }}
      >
        <div className="cell">
          <CellImage src="/img/contenthub.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/remoting.png" />
        </div>
      </div>
      <div className="bottom-block links">
        <Cta to="/work/unity-ar-companion">Next</Cta>
      </div>
    </CaseStudy>
  );
}
