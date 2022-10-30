import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

    const handleListner = () => {
        setWindowsWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleListner);

        return () => {
            window.removeEventListener('resize', handleListner);
        }
    }, [windowsWidth])

    return (
        <div>
            {windowsWidth}
        </div>
    )
}
export default UseEffect