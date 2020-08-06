import React from 'react';

import './WorkCard.css';
import githubLogo from '../img/github.svg';

function WorkCard(props) {
  const { work } = props;
  return (
    <div className="WorkCard">
      <img src={work.thumb} alt="thumb" />
      <div className="languages-logo">
        {work.languages.map((language, key) => (
          <img key={key} src={`/images/logo/${language}.png`} alt="language logo" />
        ))}
      </div>
      <div className="text-card">
        <h3>{work.name}</h3>
        <p>{work.description}</p>
      </div>
      <div className="view-section">
        {work.url ? <button><a href="#">Voir</a></button> : <button disabled><a>Voir</a></button>}
        <img src={githubLogo} alt="github logo" />
      </div>
    </div>
  );
}

export default WorkCard;
