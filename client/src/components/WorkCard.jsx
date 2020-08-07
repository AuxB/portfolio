import React from 'react';
import PropTypes from 'prop-types';

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
      <button type="button" className={work.url ? 'view-button' : 'view-button view-disabled'}><a href={work.url} target="_blank" rel="noreferrer">Voir</a></button>
      <a className="github-button" href={work.urlGit} target="_blank" rel="noreferrer">
        <img src={githubLogo} alt="github logo" />
      </a>
    </div>
  );
}

WorkCard.defaultProps = {
  work: PropTypes.shape.isRequired({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlGit: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
  }),
};

export default WorkCard;
