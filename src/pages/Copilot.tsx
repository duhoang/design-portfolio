import CaseStudy from '../components/CaseStudy';
import CellImage from '../components/CellImage';
import Cta from '../components/Cta';

export default function Copilot() {
  return (
    <CaseStudy>
      <div className="text">
        <h1>Copilot AI</h1>
        <p>
          Copilot is an AI automated ad spend product within the Xaxis global programmatic
          media and advertising platform.
        </p>
      </div>
      <div className="grid single">
        <div className="cell">
          <CellImage src="/img/copilot-1.png" />
        </div>
      </div>
      <div className="text">
        <p>
          Copilot uses a collection of machine learning algorithms to determine the best
          ROI on advertisers' dollars, working with an ad trader who oversees the account.
        </p>
        <p>
          My job is to visualize Copilot's decision making in the form of graphs, charts,
          and reports so that the trader can understand what the machine is thinking.
        </p>
      </div>
      <div className="grid triple-one">
        <div className="cell">
          <CellImage src="/img/copilot-grid-4.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/copilot-grid-2.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/copilot-grid-3.png" />
        </div>
      </div>
      <div className="grid double-one">
        <div className="cell" />
        <div className="cell">
          <CellImage src="/img/copilot-grid-1.png" />
        </div>
        <div className="cell">
          <CellImage src="/img/copilot-grid-6.png" />
        </div>
        <div className="cell" />
      </div>
      <div className="bottom-block links">
        <Cta to="/work/mapd">Next</Cta>
      </div>
    </CaseStudy>
  );
}
