import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div>
        <h3>Branford Quality Finishing</h3>
        <p><strong>Secretary/IT Assistant</strong> (Jan 2016 - Sep 2022)</p>
        <ul>
          <li>Troubleshot Mac systems and resolved software issues.</li>
          <li>Refined projects to eliminate bugs and optimize efficiency.</li>
        </ul>
      </div>
      <div>
        <h3>Universal Studios Hollywood</h3>
        <p><strong>Parking Ambassador</strong> (Aug 2022 - Nov 2022)</p>
        <ul>
          <li>Ensured smooth traffic flow and enhanced visitor experiences.</li>
          <li>Collaborated with teams in a dynamic environment.</li>
        </ul>
      </div>
      <div>
        <h3>All-Stars After-School Program</h3>
        <p><strong>After-School Coach</strong> (Jun 2023 - Present)</p>
        <ul>
          <li>Designed engaging programming activities to inspire a love for technology.</li>
          <li>Managed schedules effectively and fostered teamwork among students.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
