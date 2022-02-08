import React from 'react';
import {useState} from 'react'

const js = () => {

    const [time, setTime] = useState(1);
                 
    const handler = () => {
        setTime(time + 1)
    }

    return (
        <div>
            <span>현재시간 {time}</span>
            <button onClick={handler}>버튼</button>
        </div>
    );
};

export default js;