import React, { useContext } from 'react'
import { useTheme, useThem, useThemeUpdate } from './ThemContext'

const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate();
    const themeStyle = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle button</button>
            <div style={themeStyle}>FunctionContextComponent</div>
        </>
    )
}

export default FunctionContextComponent