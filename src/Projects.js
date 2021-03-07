import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';

import './Projects.css';
import ProjectCard from './components/ProjectCard.js';

const base = new Airtable({apiKey: 'keypdEsruXrumSCbV'}).base('app9PStCe8EWT2PuX');

function Projects() {

  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    base('Projects')
      .select({view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setProjects(records);
        fetchNextPage();
      })
  }, []);
  return (
    <div className="Projects">
        {projects.map((proj) => (
            <div className={proj.fields.class}>
              <ProjectCard
                className={proj.fields.class}
                front={proj.fields.front}
                back={proj.fields.back}
                />
            </div>
            ))}
        <div className="projects_title">projects i'm<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proud of:</div>

        <div className="walmart_star">*</div>
    </div>
  );
}



export default Projects;