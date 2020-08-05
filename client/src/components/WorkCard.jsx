import React from 'react';

import './WorkCard.css';
import githubLogo from '../img/github.svg'

function WorkCard(props) {
  const { work } = props;
  return (
    <div className="WorkCard">
      <img src={work.screenshot} alt="thumb" />
      <div className="languages-logo">
        {work.languages.map(language => {
          return <img src={`/images/logo/${language}.png`
          } />
        })}
      </div>
      <div className="text-card">
        <h3>{work.name}</h3>
        <p>{work.description}</p>
      </div>
      <div className="view-section">
        {work.url ? <button><a href='#'>Voir</a></button> : <button disabled><a>Voir</a></button>}
        <img src={githubLogo} alt="github logo" />
      </div>
    </div>
  );
}

export default WorkCard;
