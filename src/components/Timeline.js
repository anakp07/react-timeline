import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map((event,i) => {
    return (
      <TimelineEvent 
      person={event.person}
      status={event.status}
      type ={event.type}
      key={event.timeStamp}
      />
    );
});

return (
  <div className="timeline">
      {timelineComponents}
    </div>
  );
};

export default Timeline;