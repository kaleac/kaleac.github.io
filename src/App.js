import React, { useEffect } from 'react';
import Airtable from 'airtable';
import './App.css';
import AboutMe from './AboutMe.js';
import './AboutMe.css';
import Experience from './Experience.js';
import './Experience.css';
import Projects from './Projects.js';
import Goodbye from './Goodbye.js';

import dragon from "./assets/images/dragon.png";
import me from "./assets/images/me.jpg";


function App() {
  return (
    <div className="App">
      <div className="star_decor0">*</div>
      <div className="star_decor">*</div>
      <div className="home">
        <div className="greeting">
          <span class="pronunciation">[kuh-lee-uh]</span>
          <span className="bold">hello, </span>
          i'm kalea chu
        </div>
        <div className="intro"><br/>cs at uc berkeley.<br/>software and design.<br/>passionate about meaningful projects.</div>
      </div>
      <img className="dragon" src={dragon} alt="chinese zodiac: dragon"></img>
      <img className="me" src={me} alt="me"></img>
      <div className="chinese-name">朱<br/>美<br/>华</div>
      <Experience />
      <AboutMe />
      <Projects />
      <Goodbye />
      <div className="sunflowerseeds">*</div>
      {/* <div className="title">here are some roles i've taken</div> */}
    </div>
  );
}

export default App;
