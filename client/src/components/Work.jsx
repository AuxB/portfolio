import React from 'react';
import WorkCard from './WorkCard';

import './Work.css'

const works = [
  {
    name: 'Projet1',
    description: 'Premier travail réalisé a la Wild code School pour le client Cabreta, simple projet réalisé en HTML CSS Javascript',
    urlGit: 'http://github.com',
    url: 'https://www.google.com/',
    screenshot: '/images/thumbs/pokefight-screenshot.png',
    languages: ['react', 'nodejs', 'js'],
  },
  {
    name: 'Projet1',
    description: 'Premier travail réalisé a la Wild code School pour le client Cabreta, simple projet réalisé en HTML CSS Javascript',
    urlGit: 'http://github.com',
    url: 'https://www.google.com/',
    screenshot: '/images/thumbs/pokefight-screenshot.png',
    languages: ['react', 'nodejs'],
  },
  {
    name: 'Projet1',
    description: 'Premier travail réalisé a la Wild code School pour le client Cabreta, simple projet réalisé en HTML CSS Javascript',
    urlGit: 'http://github.com',
    url: '',
    screenshot: '/images/thumbs/pokefight-screenshot.png',
    languages: ['react', 'nodejs'],
  },
  {
    name: 'Projet1',
    description: 'Premier travail réalisé a la Wild code School pour le client Cabreta, simple projet réalisé en HTML CSS Javascript',
    urlGit: 'http://github.com',
    url: '',
    screenshot: '/images/thumbs/pokefight-screenshot.png',
    languages: ['react', 'nodejs'],
  },
];

function Work() {
  return (
    <div className="Work wrap-center">
      {works.map(work => {
        return (
          <WorkCard work={work}/>)
      })}
    </div>
  );
}

export default Work;