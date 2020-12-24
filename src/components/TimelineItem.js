import React from 'react'
import styled from 'styled-components'

const TimelineItem = ({data}) => {
    return (
        <StyledTimelineItem>
            <div className="timeline-item-content">
                <div className="text">
                    <time>{data.date}</time>
                    <p>{data.text}</p>
                </div>
                <span className="circle"></span>
            </div>
        </StyledTimelineItem>
    )
}

const StyledTimelineItem = styled.div`
    background: lightblue;
    display: flex;
    justify-content: center;
    width: 50%;
    &:nth-child(even) {
        align-self: flex-end;
        .timeline-item-content {
            text-align: start;
            .text {
            margin-left: 1rem;
        }
        }
        .timeline-item-content::after {
            right: auto;
            left: -2%;
            box-shadow: -1px 1px 1px rgba(0,0,0,0.2);
        }
        .timeline-item-content span {
            left: -28px;
            
        }
    }
    .timeline-item-content {
        font-size: 0.95rem;
        width: 85%;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        text-align: end;
        position: relative;
        padding-top: 0.6rem;
        .text {
            margin-right: 1rem;
        }
        time {
            font-weight: 700;
        }
        span {
            background-color: #ff5370;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            top: calc(50% - 5px);
            right: -28px;
            
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
        right:-1.9%;
        top: calc(50% - 5px);
    }
`

export default TimelineItem