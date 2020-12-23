import React from 'react'
import styled from 'styled-components'

const TimelineItem = ({data}) => {
    return (
        <StyledTimelineItem>
            <div className="timeline-item-content">
                <time>{data.date}</time>
                <p>{data.text}</p>
                <span className="circle"></span>
            </div>
        </StyledTimelineItem>
    )
}

const StyledTimelineItem = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    &:nth-child(even) {
        align-self: flex-end;
        .timeline-item-content::after {
            right: auto;
            left: -5px;
            box-shadow: -1px 1px 1px rgba(0,0,0,0.2);
        }
        .timeline-item-content span {
            left: -1.1rem;
        }
    }
    .timeline-item-content {
        width: 90%;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
        span {
            background-color: #ff5370;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            top: calc(50% - 5px);
            right: -1.1rem;
            z-index: 10;
        }
    }

    .timeline-item-content::after {
        content: '';
        background: #fff;
        box-shadow: 1px -1px 1px rgba(0,0,0,0.2);
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        position: absolute;
        right:-5px;
        top: calc(50% - 5px);
    }
`

export default TimelineItem