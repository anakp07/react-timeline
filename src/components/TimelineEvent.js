import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return(
    <div className="timeline-event">
      <span className="event-person">{props.person}</span>
      <span className="event-status">{props.status}</span>
      <span className="event-type"><Timestamp time={props.timeStamp} /></span>
    </div>
  );
}

export default TimelineEvent;