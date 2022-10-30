import React, { createContext, useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';

export const ThemeContext = React.createContext()

const UseContext = () => {

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent />
            <ClassContextComponent />
        </ThemeContext.Provider>
    )
}

export default UseContext;