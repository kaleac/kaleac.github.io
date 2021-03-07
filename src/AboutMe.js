import './AboutMe.css';
import Loved from './components/Loved.js';
import waterflowers from "./assets/images/waterflowers.jpeg";
import manga from "./assets/images/punpun.jpeg";
import bujo from "./assets/images/bujo.png";
import printemps from "./assets/images/le_printemps.png";

// to do: replace the things inside <div className>'s with Loved.js components
function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="love_container">
        <div className>
          <img className="waterflowers" src={waterflowers} alt="flowers"></img>
          <div className="waterflowerscap">learning languages</div>
        </div>
        <div className>
          <img className="manga" src={manga} alt="manga"></img>
          <div className="mangacap">manga</div>
        </div>
        <div className>
          <img className="bujo" src={printemps} alt="bullet journaling"></img>
          <div className="bujocap">journaling</div>
        </div>
      {/* <img className="bujo" src={bujo} alt="bullet journaling"></img> */}
      {/* <Loved src={manga} alt_text="manga"/> */}
      </div>
      <div className="title">things i love...</div>
      <div className="star_enjoy">*</div>
    </div>
  );
}

export default AboutMe;