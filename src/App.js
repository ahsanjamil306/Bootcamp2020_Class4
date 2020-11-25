import React, {useState} from 'react';
import './App.css';
import {Message} from './message';

export default function App() {

    let [count, setCount] = useState(1);
    let [isMorning, setDay] = useState(false);
    

    return (
        <div className={`box ${isMorning ? 'dayLight' : ''}`}>
            <h1>Goooooooood  {isMorning ? 'Morning' : 'Night'}</h1>

            <Message counter={count}/>
        <button className="button1" onClick={()=> setCount(++count)}>Update Counter</button>
        <button className="button2" onClick={()=> setDay(!isMorning)}> Update day </button>
        </div>
    );
  
  
}


