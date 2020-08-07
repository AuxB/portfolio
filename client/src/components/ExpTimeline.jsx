import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './ExpTimeline.css';

function Icon(props) {
  return <img className="exp-icon" src={props.url} alt="icon" />;
}

function ExpTimeline() {
  return (
    <div id="exp" className="ExpTimeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'var(--red)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--red)' }}
          date="2020 - present"
          icon={<Icon url="/images/logo/wcs.png" />}
        >
          <h3 className="vertical-timeline-element-title">Wild Code School</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris - 75005</h4>
          <p>
            Durant les 5 mois de formation, l'apprentissage se base sur le développement
            de sites internet interactifs qui utilisent les technologies HTML, CSS,
            Javascript, et vous allez mener à bien un projet de développement web
            en utilisant React/Node JS ou PHP/Symfony ou Java/JEE. Vous allez petit
            à petit vous créer un portfolio de projets que vous pourrez montrer à de potentiels
            recruteurs, et surtout vous allez apprendre à faire votre veille pour rester
            toujours à jour sur les nouvelles technologies demandées sur le marché.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="mars 2018 - août 2019"
          icon={<Icon url="/images/logo/ac.png" />}
        >
          <h3 className="vertical-timeline-element-title">Digital compositor</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris - 75017</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, natus corrupti
            veritatis ad culpa dolorum enim sunt sit aliquid saepe fuga, necessitatibus doloremque
            quis ab nostrum animi laudantium consequuntur illum!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015-1018"
          icon={<Icon url="/images/logo/valenciennes.png" />}
        >
          <h3 className="vertical-timeline-element-title">Université Polytechnique Hauts-de-France</h3>
          <h4 className="vertical-timeline-element-subtitle">Valenciennes - 59000</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ipsam reiciendis.
            Cum debitis animi id incidunt nisi sequi quidem, facere maiores corporis delectus
            officia nulla, inventore eaque nemo expedita accusantium?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013-1015"
        >
          <h3 className="vertical-timeline-element-title">Lycée Henri Martin</h3>
          <h4 className="vertical-timeline-element-subtitle">St Quentin - 02100</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, ipsam reiciendis.
            Cum debitis animi id incidunt nisi sequi quidem, facere maiores corporis delectus
            officia nulla, inventore eaque nemo expedita accusantium?
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  );
}

export default ExpTimeline;