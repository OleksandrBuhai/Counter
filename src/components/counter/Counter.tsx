import React, {useState} from 'react';
import Button from "../buttons/Button";
import c from "./Counter.module.css"

type CounterType = {
    value: number
    incNumber: () => void
    resetNumber: () => void
}

const Counter = (props: CounterType) => {

    const disabledIncButton = props.value === 5
    const disabledResetButton = props.value === 0

    return (
        <div className={c.counter}>
            <div className={c.displayContainer}>
                <h1 className={props.value=== 5? c.error: " "}>{props.value}</h1>
            </div>
            <div className={c.btnContainer}>
                <Button name={"INC"} callback={props.incNumber} disabled={disabledIncButton}/>
                <Button name={"Reset"} callback={props.resetNumber} disabled={disabledResetButton}/>
            </div>
        </div>
    );
};

export default Counter;