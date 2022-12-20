import React from 'react';

type CounterType = {
    value:number
}

const Counter = (props:CounterType) => {


    return (
        <div>
            <input value={props.value}/>
        </div>
    );
};

export default Counter;