import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(10);
  const [tempColor, setTempColor] = useState('cold')


  const increaseTemp =()=>{
    if(temperature >= 30) return 30;

    let newTemp = temperature+1
    setTemperature(newTemp);

    if(newTemp>=15){
      setTempColor('hot')
    }else{
      setTempColor('cold')

    }
  }
  const decreaseTemp =()=>{
    if(temperature <= 0) return 0;

    let newTemp = temperature-1

    setTemperature(newTemp);
    if(newTemp>=15){
      setTempColor('hot')
    }else{
      setTempColor('cold')

    }
  }
  return (
    <div className="container">
      <div className={`temp-circle ${tempColor}`}>
        <div className="temp">{temperature}°C</div>
      </div>
      <div className="btns">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
}

export default App;
