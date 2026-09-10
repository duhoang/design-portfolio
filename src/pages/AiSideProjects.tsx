import Cta from '../components/Cta';

export default function AiSideProjects() {
  return (
    <div className="home">
      <div className="intro">
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
            With AI changing the landscape of design and tech, I'm excited to be able to
            invent new user interface paradigms and help shape the boundless future of
            interaction design.
          </p>
          — Du Hoang
          <div className="links">
            <Cta to="/work/unity-xr" glyph="✈">
              Design Work Portfolio
            </Cta>
            <a href="https://medium.com/@duhoang" target="_blank" rel="noreferrer">
              Writings
            </a>
            <a href="mailto:du.hoang@gmail.com" target="_blank" rel="noreferrer">
              Email
            </a>
            <a href="http://linkedin.com/in/duhoang" target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </div>
        </div>

        <div className="sidebar">
          <div className="sub-heading">AI Side Projects</div>
          <div className="video-box">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MPX9Pr4xgfs?si=fKkWd4inasrmNWid&amp;controls=1&amp;loop=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="app-card">
            <div
              className="app-card-icon"
              style={{ backgroundImage: 'url(/img/AppIcon-3DS.png)' }}
            />
            <div className="app-card-info">
              3D Sketchbook is an iPad app that lets user draw sketches then transform them
              into 3D models.
            </div>
          </div>
          <div className="video-box">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EBTtBj0yNg4?si=J979nwxgNUQzVXCV&amp;controls=1&amp;loop=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="app-card">
            <div
              className="app-card-icon"
              style={{ backgroundImage: 'url(/img/AppIcon-AIS.png)' }}
            />
            <div className="app-card-info">
              AI Sketchbook for iOS brings the experience and feel of a real sketch book to
              AI image gen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
