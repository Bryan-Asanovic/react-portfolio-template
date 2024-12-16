import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career and Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2022"
            iconStyle={{ background: '#ff6347', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Avila College</h3>
            <h4 className="vertical-timeline-element-subtitle">Netherlands</h4>
            <p>
              General Education
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ALDI</h3>
            <h4 className="vertical-timeline-element-subtitle">Manager</h4>
            <p>
              Management, Team Leading, Operations
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - Present"
            iconStyle={{ background: '#ff6347', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Roc Van Twente</h3>
            <h4 className="vertical-timeline-element-subtitle">Netherlands</h4>
            <p>
              Software Developer
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;