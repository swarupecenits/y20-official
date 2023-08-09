import "./App.css";
import Surround from "./surround.svg";
import { useRef } from "react";
import NavLogo from "./NavLogo.svg";
function NavBar() {
  const ham = useRef(null);
  const navState = useRef(null);
  const hamClick = () => {
    navState.current.style.visibility === "hidden"
      ? (navState.current.style.visibility = "visible")
      : (navState.current.style.visibility = "hidden");
  };
  return (
    <>
      <nav>
        <div>
          <img alt="logo" src={NavLogo} />
        </div>

        <button id="hamburger" ref={ham} onClick={hamClick}>
          X
        </button>
        <div className="links" ref={navState}>
          <a role="button" id="home">
            HOME
          </a>
          <a role="button" id="events">
            EVENTS
          </a>
          <a role="button" id="sponsors">
            SPONSORS
          </a>
          <button id="brochure">BROCHURE</button>
        </div>
      </nav>
    </>
  );
}
function Unite() {
  return (
    <div className="unite">
      <h1>UNITING YOUTH, IGNITING CHANGE!</h1>
      <div></div>
      <h1>Why unite at Northeast Y20 Conclave?</h1>
      <div>
        <div>
          <h1>Empowerment through knowledge</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            numquam velit ut atque consequuntur cumque accusamus vitae explicabo
            consequatur beatae.
          </p>
          <h1>Empowerment through knowledge</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            numquam velit ut atque consequuntur cumque accusamus vitae explicabo
            consequatur beatae.
          </p>
          <h1>Empowerment through knowledge</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            numquam velit ut atque consequuntur cumque accusamus vitae explicabo
            consequatur beatae.
          </p>
        </div>
      </div>
    </div>
  );
}
function Events() {
  const events_info = [
    { name: "EVENT 1", desc: "DESCRIPTION", time: "TIMINGS" },
    { name: "EVENT 2", desc: "DESCRIPTION", time: "TIMINGS" },
    { name: "EVENT 3", desc: "DESCRIPTION", time: "TIMINGS" },
    { name: "EVENT 4", desc: "DESCRIPTION", time: "TIMINGS" },
    { name: "EVENT 5", desc: "DESCRIPTION", time: "TIMINGS" },
  ];
  return (
    <div className="events">
      <h1>EVENTS</h1>
      {events_info.map((item, index) => (
        <div className="event">
          <div className="green-filter">
            <div className="black-filter">
              <label className="event-name">NAME: {item.name}</label>
              <p className="event-desc">DESCRIPTION: {item.desc}</p>
              <label className="timings">TIMINGS: {item.time}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function Theme() {
  return (
    <div>
      <div>
        <h1>THEME</h1>
      </div>
      <div></div>
      <p>"Beyond Horizons:Youth Powering Progress"</p>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, id
        quod inventore voluptatibus impedit labore quos fugiat temporibus at
        quae accusantium explicabo eum architecto amet autem porro sint modi
        alias exercitationem dolorum laudantium maiores? Magni, similique
        asperiores molestias illo doloribus, nesciunt quia aperiam nostrum
        blanditiis a, dicta praesentium quis quaerat?Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Quidem, libero?
      </div>
    </div>
  );
}
function Hero() {
  return (
    <div className="hero">
      <h1>
        WELCOME TO <b>NORTHEAST Y20 CONCLAVE</b>
      </h1>
      <img alt="g20-img" />
      <img alt="think-india-img" />
      <img alt="vasudhaiva-kutumbakam" />
      <div className="motto-container">
        <h2>ONE EARTH.</h2>
        <h2>.ONE FAMILY.</h2>
        <h2>.ONE FUTURE</h2>
      </div>
    </div>
  );
}
function Speakers() {
  const primary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
  ];
  const secondary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
    { name: "Speaker 3", desgn: "designation", photo: "photo3" },
    { name: "Speaker 4", desgn: "designation", photo: "photo4" },
    { name: "Speaker 5", desgn: "designation", photo: "photo5" },
  ];
  const tertiary = [
    { name: "Speaker 1", desgn: "designation", photo: "photo1" },
    { name: "Speaker 2", desgn: "designation", photo: "photo2" },
    { name: "Speaker 3", desgn: "designation", photo: "photo3" },
    { name: "Speaker 4", desgn: "designation", photo: "photo4" },
    { name: "Speaker 5", desgn: "designation", photo: "photo5" },
  ];
  return (
    <div className="speakers">
      <h1>SPEAKERS</h1>
      <div className="primary">
        {primary.map((each) => (
          <div className="each-speaker">
            <img src={each.photo} />
            <label className="speaker-name">{each.name}</label>
            <label className="speaker-designation">{each.desgn}</label>
          </div>
        ))}
      </div>
      <div className="secondary">
        {secondary.map((each) => (
          <div className="each-speaker">
            <img src={each.photo} />
            <label className="speaker-name">{each.name}</label>
            <label className="speaker-designation">{each.desgn}</label>
          </div>
        ))}
      </div>
      <div className="tertiary">
        {tertiary.map((each) => (
          <div className="each-speaker">
            <img src={each.photo} />
            <label className="speaker-name">{each.name}</label>
            <label className="speaker-designation">{each.desgn}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
function Sponsors() {
  const sponsors_info = [
    { logo: "logo1" },
    { logo: "logo2" },
    { logo: "logo3" },
    { logo: "logo4" },
    { logo: "logo5" },
    { logo: "logo6" },
    { logo: "logo7" },
  ];
  return (
    <div className="sponsors">
      <center>
        <div className="surrounder">
          <img src={Surround} />
          <h1>SPONSORS</h1>
          <img src={Surround} />
        </div>
      </center>
      <div className="sponsors-img">
        {sponsors_info.map((sponsor) => (
          <img src={sponsor.logo} />
        ))}
      </div>
    </div>
  );
}
function OrganisingInstitutes() {
  const inst = [
    { name: "National Institute of Technology, Silchar", logo: "nitslogo" },
    { name: "Assam University, Silchar", logo: "aulogo" },
  ];
  return (
    <div className="Organising">
      <h1>Organising Institutes</h1>
      {inst.map((institute) => (
        <div className="insititute">
          <img src={institute.logo} />
          <label>{institute.name}</label>
        </div>
      ))}
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <center>
        <h2>NORTHEAST Y20 CONCLAVE</h2>
      </center>
      <div className="part-1">
        <div className="col">
          <b>ORGANISERS</b>
          <a href="https://www.thinkindiaorg.in/">Think India</a>
          <a href="https://nits.ac.in/">
            National Institute of Technology, Silchar
          </a>
          <a href="#">Assam University</a>
        </div>
        <div className="col">
          <b>CONTACTS</b>
          <label>Contact Number:</label>
          <label>Email:</label>
        </div>
        <div className="col">
          <b>SOCIAL MEDIA</b>
          <a>Instagram</a>
          <a>Facebook</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <center>&copy; Copyrights @ </center>
    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Unite />
      <Events />
      <Theme />
      <Speakers />
      <Sponsors />
      <OrganisingInstitutes />
      <Footer />
    </div>
  );
}

export default App;

