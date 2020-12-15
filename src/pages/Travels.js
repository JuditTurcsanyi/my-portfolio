import React, {useState} from 'react';
import styled from 'styled-components';
import us from "../map-images/us.svg";
import world from "../map-images/world.svg";

const Travels = () => {
    const [imagesource, setImagesource] = useState(us);
    const changeWorldMap = () => {
        setImagesource(world);
    }
    const changeUsMap = () => {
        setImagesource(us);
    }
    return(
        <Travelpage>
            <div className="filter">
                <ul>
                    <li onClick={changeUsMap}>US</li>
                    <li onClick={changeWorldMap}>World</li>
                </ul>
            </div>
            <div className="maps">
                <img src={imagesource} alt="map"/>
            </div>
        </Travelpage>
    )
}

const Travelpage = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
       
    li {
        margin: 1rem;
        padding: 1rem;
        font-size: 1.5rem;
        border: solid 1px #008f00;
            border-radius: 5px;
            color: #008f00;
        &:hover{
            border: solid 1px #008f00;
            background: #008f00;
            border-radius: 5px;
            color: white;
        }
    }
    img {
        width: 50vw;
    }
`



export default Travels;