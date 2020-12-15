import { v4 as uuidv4 } from "uuid";
import portfolio from './portfolio-images/portfolio.PNG';
import music from './portfolio-images/music.PNG';
import potter from './portfolio-images/potter.PNG';
import weather from './portfolio-images/weather.PNG';

export const Projectlist = () => {
    return [
        {
            name: "Portfolio Website",
            tech: "ReactJS (styled-components, react-router-dom, framer-motion)",
            date: "December 2020",
            image: `${portfolio}`,
            id: uuidv4()
        },
        {
            name: "Music Player",
            description: "The project I learned React on. Created based on The Creative React and Redux Course by Dev Ed (https://developedbyed.com/courses/enrolled/1203573) Additional functions added by me: Shuffle, Replay, Dark Mode.",
            tech: "ReactJS, Sass",
            date: "November 2020",
            image: `${music}`,
            id: uuidv4()
        },
        {
            name: "Weather App",
            description: "Detects location data of user, fetches data from API and shows current weather conditions based on location. Toggle option between Celsius and Fahrenheit and changes background image based on current weather conditions.",
            tech: "OpenWeatherMap API, Vanilla JS, HTML/CSS",
            date: "October 2020",
            image: `${weather}`,
            id: uuidv4()
        },
        {
            name: "Quiz App",
            description: "Super simple quiz app that shows the next question only when the current question is answered, highlights true/false selections and calculates the end result. My very first own project that I couldn't be more proud of :)",
            tech: "Vanilla JS, HTML/CSS",
            date: "October 2020",
            image: `${potter}`,
            id: uuidv4()
        }
    ]
}

export default Projectlist;