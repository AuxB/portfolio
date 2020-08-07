import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WorkCard from './WorkCard';

import './Work.css';

const backUrl = process.env.REACT_APP_API_URL;
function Work() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/works`)
      .then((res) => setWorks(res.data));
  }, []);

  return (
    <div id="work" className="Work wrap-center">
      {works.map((work) => (
        <WorkCard work={work} />))}
    </div>
  );
}

export default Work;
