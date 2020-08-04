import React from 'react';

import './About.css';

function About() {
  return (
    <div className="About">
      <div>
        <h1>Auxence <span>Blondel</span></h1>
        <h2>Développeur Fullstack Js | React.Js | Node.Js</h2>
      </div>
      <p>
        "J'essaie toujours de faire ce que je ne sais pas faire,
        c'est ainsi que j'espère apprendre à le faire."
      </p>
      <p className="author-quote">Pablo Picasso</p>
    </div >
  );
}
export default About;
