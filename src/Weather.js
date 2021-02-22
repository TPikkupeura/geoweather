import React,{useState,useEffect} from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = '';



export default function Weather({lat, lng}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDir] = useState(0);
    const [description, setDesc] = useState(0);
    const [icon, setIcon] = useState(0);
    
    useEffect(() => {
        const url = API_URL + 
        'lat=' + lat + 
        '&lon=' + lng + 
        '&units=metric' + 
        '&appid=' + API_KEY;
        
        fetch(url)
        .then(res => res.json())
        .then (
            (result) => {
                if (result.main != undefined) {
                    setTemp(result.main.temp);
                    setSpeed(result.wind.speed);
                    setDir(result.wind.deg);
                    setDesc(result.weather[0].description);
                    setIcon(ICON_URL + result.weather[0].icon + '@2x.png');
                } else {
                    alert('Could not read weather information!')
                }
            },(error) => {
                alert(error);
            }
        )
    }, [])

    return (
        <div>
            <h3>Weather at your location:</h3>
            <p>{temp} C&#176;</p>
            <p>{speed} m/s {direction} degrees;</p>
            <p>{description}</p>
            <img src={icon} alt=""/>
        </div>
    )
}