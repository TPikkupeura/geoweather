import './App.css';
import {useState, useEffect} from 'react'
import Weather from './Weather'

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, (error) => {
        alert(error);
      })
    } else {
      alert("The browser doesn't support geolocation.")
    }
  }, [])

  return (
    <div>
      <h3>Your position is:</h3>
      <p>
        Position: {lat.toFixed(3)},
        Position: {lng.toFixed(3)}
      </p>
      <Weather lat={lat} lng={lng} />
    </div>
  );
}

export default App;
