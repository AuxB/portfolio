import React from 'react';

import './About.css';

function About() {
  return (
    <div id="about" className="About wrap-center">
      <div>
        <h1>
          Auxence
          <span>Blondel</span>
        </h1>
        <h2>Développeur Fullstack Js | React.Js | Node.Js</h2>
      </div>
      <p>
        &#34;J&apos;essaie toujours de faire ce que je ne sais pas faire,
        c&apos;est ainsi que j&apos;espère apprendre à le faire.&#34;
      </p>
      <p className="author-quote">Pablo Picasso</p>
    </div>
  );
}
export default About;
