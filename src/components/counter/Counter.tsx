import React, {useReducer, useState} from 'react';
import Button from "../buttons/Button";
import c from "./Counter.module.css"

type CounterType = {

    incNumber: () => void
    resetNumber: () => void
}

const Counter = (props: CounterType) => {
    const value:number = 0
    
    const counterReducer = (counter:number, action:any) => {
      switch (action){
          case 'add':
              return counter + 1
          case 'reset':
              return counter = 0
          default:
              return counter
      }
    }

    type addNumber = string
    type resetNumber = string

    const addNumber:addNumber = "add"
    const resetNumber: resetNumber = "reset"
        
    const [state, dispatch] = useReducer(counterReducer, value)
    
    const addNum = () => {
      dispatch(addNumber)
    }
    const resetNum = () => {
      dispatch(resetNumber)
    }
    
    const disabledIncButton = state === 5
    const disabledResetButton = state === 0

    return (
        <div className={c.counter}>
            <div className={c.displayContainer}>
                <h1 className={value === 5? c.error: " "}>{state}</h1>
            </div>
            <div className={c.btnContainer}>
                <Button name={"INC"} callback={addNum} disabled={disabledIncButton}/>
                <Button name={"Reset"} callback={resetNum} disabled={disabledResetButton}/>
            </div>
        </div>
    );
};

export default Counter;