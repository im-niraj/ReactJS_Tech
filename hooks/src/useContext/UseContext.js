import React, { createContext, useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemContext';


const UseContext = () => {

    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    )
}

export default UseContext;