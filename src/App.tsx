import React, {useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";

function App() {

    const [value, setValue] = useState<number>(0)

    const incNumber = () => {
        if (value != 5) {
            setValue(value + 1)
        }
    }

    const resetNumber = () => {
        setValue(0)
    }

    return (
        <div className="App">
           <Counter value={value} incNumber={incNumber} resetNumber={resetNumber} />
        </div>
    );
}

export default App;
