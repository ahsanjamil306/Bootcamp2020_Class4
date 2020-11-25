import React, {useState} from 'react';
import './App.css';
import {Message} from './message';

export default function App() {

    let [count, setCount] = useState(1);
    let [isMorning, setDay] = useState(false);
    

    return (
        <div className={`box ${isMorning ? 'dayLight' : ''}`}>
            <h1>GooD  {isMorning ? 'Morning' : 'Night'}</h1>

            <Message counter={count}/>
        <button onClick={()=> setCount(++count)}>Update Counter</button>
        <button onClick={()=> setDay(!isMorning)}> Update day </button>
        </div>
    );
  
  
}


