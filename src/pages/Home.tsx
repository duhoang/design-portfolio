import Cta from '../components/Cta';

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="avatar">
          <img src="/img/me-2021.png" alt="Du Hoang" />
        </div>
        <h1>Hello,</h1>
        <p>
          I'm a Staff Product Designer who has led design at various startups and tech
          companies in both SF and NYC.
        </p>

        <p>
          The focus of my work is on AI and XR. As a design technologist with a CompSci
          background, I have a deep understanding of emerging technologies, how they are
          built, and the design possibilities they entail.
        </p>

        <p>
          With AI changing the landscape of design and tech, I'm excited to invent new
          user interface paradigms and help shape the future of interaction design between
          humans and machines.
        </p>
        — Du Hoang
      </div>
      <div className="links">
        <Cta to="/work/unity-xr">Design Portfolio</Cta>
        <a href="mailto:du.hoang@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
        <a href="http://linkedin.com/in/duhoang" target="_blank" rel="noreferrer">
          Linkedin
        </a>
      </div>
    </div>
  );
}
