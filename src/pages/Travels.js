import React, { useState } from "react";
import styled from "styled-components";
//Import all map images
function importAll(i) {
  let images = {};
  i.keys().map((item, index) => {
    return images[item.replace("./", "")] = i(item);
  });
  return images;
}
const images = importAll(require.context("../map-images", false, /\.(svg)$/));

const Travels = () => {
  const [imagesource, setImagesource] = useState(images["All Countries.svg"].default);
  
  const changeMap = (e) => {
    // console.log(images);
    const year = e.target.innerHTML;
    // console.log(images[`${year}.svg`].default)
    setImagesource(images[`${year}.svg`].default);
  };

  const changeUSMap = (e) => {
    const year = e.target.innerHTML;
    setImagesource(images[`US-${year}.svg`].default);
  };
  return (
    <Travelpage>
      <div className="filter">
        <div className="us-maps">
            <h3>US Maps</h3>
            <button onClick={changeMap}>All States</button>
            <button onClick={changeUSMap}>2014</button>
            <button onClick={changeUSMap}>2015</button>
            <button onClick={changeUSMap}>2016</button>
            <button onClick={changeUSMap}>2017</button>
            <button onClick={changeUSMap}>2018</button>
            <button onClick={changeUSMap}>2019</button>
        </div>
        <div className="world-maps">
            <h3>World Maps</h3>
            <button onClick={changeMap}>All Countries</button>
            <button onClick={changeMap}>2007</button>
            <button onClick={changeMap}>2008</button>
            <button onClick={changeMap}>2011</button>
            <button onClick={changeMap}>2012</button>
            <button onClick={changeMap}>2013</button>
            <button onClick={changeMap}>2014</button>
            <button onClick={changeMap}>2015</button>
            <button onClick={changeMap}>2016</button>
            <button onClick={changeMap}>2017</button>
            <button onClick={changeMap}>2018</button>
            <button onClick={changeMap}>2019</button>
            <button onClick={changeMap}>2020</button>
        </div>
      </div>
      <div className="maps">
        <img src={imagesource} alt="map" />
      </div>
    </Travelpage>
  );
};

const Travelpage = styled.div`
  height: 70vh;
  margin: 0 2rem 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

.filter {
    display: flex;
    flex-direction: column;
    left: 5rem;
}

    button {
    border: none;
    background: transparent;
    color: grey;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        color: #ff5370;
        font-weight: 700;
    }
    &:focus{
        
        border-radius: 5px;
        background: #ff5370;
        color: white;
        outline: none;
    }
  }
  img {
    width: 50vw;
    object-fit: cover;
  }
`;

export default Travels;
