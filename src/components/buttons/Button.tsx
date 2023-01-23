import React from 'react';

type ButtonType = {
    name:string
    callback:()=>void
    disabled: boolean
}

const Button = (props:ButtonType) => {
    return (
        <div>
      <button onClick={props.callback} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

export default Button;