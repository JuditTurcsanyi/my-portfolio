import React from 'react'
import styled from 'styled-components'
import TimelineItem from './TimelineItem'
import timelineData from '../timelinedata'

const Timeline = () => {
    return (
        <StyledTimeline>
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
        </StyledTimeline>
    )
}

const StyledTimeline = styled.div`
background-color: yellow;
min-width: 90%;
display: flex;
justify-content: center;    
.timeline-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}
.timeline-container::after {
    background-color: #ff5370;
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    left: calc(50% - 2px);
}

`

export default Timeline;