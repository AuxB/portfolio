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
      <button type="button" className={work.url ? 'view-button' : 'view-button view-disabled'}><a href={work.url} target="_blank">Voir</a></button>
      <a className="github-button" href={work.urlGit} target='_blank'>
        <img src={githubLogo} alt="github logo" />
      </a>
    </div>
  );
}

export default WorkCard;
