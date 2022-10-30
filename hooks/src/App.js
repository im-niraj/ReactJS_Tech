import React, { useState } from "react";

function App() {
    // const [count, setCount] = useState(4);
    // const [count, setCount] = useState(() => {
    //     console.log("Run state");
    //     return 4;
    // });

    const [state, setState] = useState({ count: 4, theme: "blue" });
    const count = state.count;
    const theme = state.theme;


    const decrementCount = () => {
        // setCount(count - 1);
        // setCount(preCount => preCount - 1);

        setState(prevState => {
            return { ...prevState, count: prevState.count - 1 }
        })
    }
    const incrementCount = () => {
        // setCount(preCount => preCount + 1); 
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 }
        })
    }

    return (
        <>

            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default App;
