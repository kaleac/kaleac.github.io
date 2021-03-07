import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';

import Role from './components/Role.js';
import './Experience.css';
import './components/Role.css';

// function Bullet(props) {
//   return <div className="Bullet">*</div>;
// }
const base = new Airtable({apiKey: 'keypdEsruXrumSCbV'}).base('app9PStCe8EWT2PuX');
// const base = new Airtable({apiKey: $(process.env.personal_site_key)}).base('app9PStCe8EWT2PuX');

function Experience() {

  const [experiences, setExperiences] = React.useState([]);

  React.useEffect(() => {
    base('Experience')
      .select({view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setExperiences(records);
        fetchNextPage(); // prob not necessary
      })
    // fetchData();
  }, []);
  
  return (
    
    <div className="Experience">
      
      <div className="experience_title">some roles i've taken:</div>
        <div className="roles">
          {experiences.map((exp) => (
              <Role 
                date={exp.fields.date}
                position={exp.fields.position}
                bullet={exp.fields.bullet}
                />
            ))}
        </div>
    </div>
  );
}



export default Experience;