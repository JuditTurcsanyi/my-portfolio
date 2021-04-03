import { v4 as uuidv4 } from "uuid";
import portfolio from './portfolio-images/portfolio.PNG';
import music from './portfolio-images/music.PNG';
import potter from './portfolio-images/potter.PNG';
import weather from './portfolio-images/weather.PNG';
import coffeeshop from './portfolio-images/coffeeshop.PNG';
import game from './portfolio-images/game.PNG';

export const Projectlist = () => {
    return [
        {
            name: "Recruiters' Game",
            description: "Even if you are not considering hiring me, have some fun for a minute! :)",
            tech: "Vanilla JS, HTML/CSS",
            date: "April 2020",
            image: `${game}`,
            website: "https://recruitersgame.netlify.app/",
            github: "https://github.com/JuditTurcsanyi/Recruiters-Game",
            id: uuidv4()
        },
        {
            name: "Good Coffee website",
            description: "Website for a local coffee shop",
            tech: "ReactJS, styled-components, react-router-dom, framer-motion, react-intersection-observer, Google Maps API, Responsive Design",
            date: "March 2020",
            image: `${coffeeshop}`,
            website: "https://goodcoffee.netlify.app/",
            github: "https://github.com/JuditTurcsanyi/Good-Coffee-website",
            id: uuidv4()
        },
        {
            name: "Portfolio Website",
            description: "This is my Portfolio Website right here. :)",
            tech: "ReactJS, styled-components, react-router-dom, framer-motion, react-select, Responsive Design",
            date: "December 2020",
            image: `${portfolio}`,
            website: "https://juditturcsanyi.netlify.app/",
            github: "https://github.com/JuditTurcsanyi/my-portfolio",
            id: uuidv4()
        },
        {
            name: "Music Player",
            description: "The project I learned React on. Created based on The Creative React and Redux Course by Dev Ed (https://developedbyed.com/courses/enrolled/1203573). Additional functions added by me: Shuffle, Replay, Dark Mode.",
            tech: "ReactJS, Sass",
            date: "November 2020",
            image: `${music}`,
            website: "https://juditturcsanyi.github.io/react-music-player/",
            github: "https://github.com/JuditTurcsanyi/react-music-player",
            id: uuidv4()
        },
        {
            name: "Weather App",
            description: "Detects location data of user, fetches data from API and shows current weather conditions based on location. Toggle option between Celsius and Fahrenheit and changes background image based on current weather conditions.",
            tech: "API, Vanilla JS, HTML/CSS",
            date: "October 2020",
            image: `${weather}`,
            website: "https://juditturcsanyi.github.io/weather-app/",
            github: "https://github.com/JuditTurcsanyi/weather-app",
            id: uuidv4()
        },
        {
            name: "Quiz App",
            description: "Super simple quiz app that shows the next question only when the current question is answered, highlights true/false selections and calculates the end result. My very first own project that I couldn't be more proud of :)",
            tech: "Vanilla JS, HTML/CSS",
            date: "October 2020",
            image: `${potter}`,
            website: "https://juditturcsanyi.github.io/Harry-Potter-Quiz/",
            github: "https://github.com/JuditTurcsanyi/Harry-Potter-Quiz",
            id: uuidv4()
        }
    ]
}

export default Projectlist;